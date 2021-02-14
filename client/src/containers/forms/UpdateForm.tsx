import React, { useEffect, useState } from 'react';
import { Form, Formik, Field, FieldProps, FormikProps } from 'formik';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { useToast } from '../../context/ToastContext';
import { useApp } from '../../context/AppContext';
import { Button, Select, Input } from '../../components';
import { api } from '../../services/api';

import { StyledFormDiv, Error, ButtonContainer, Title } from './styles';

const initialValues = {
  currency: '',
  newValue: '',
};
interface Currencies {
  [key: string]: string;
}

function getValueBykey(object: Currencies, key: string) {
  return Object.values(object).find((value: string) => object[key] === value);
}

interface UpdateFormProps {
  currency: string;
  newValue: string;
}

const validation = yup.object().shape({
  currency: yup.string().required('Email e um campo obrigatorio'),
  newValue: yup.string().required('Password e um campo obrigatorio'),
});

export const UpdateForm = () => {
  const [currencies, setCurrencies] = useState({});
  const { addToast } = useToast();
  const { updateCurrency } = useApp();
  const history = useHistory();

  useEffect(() => {
    const getCurrencies = async () => {
      try {
        const response = await api.get('btc/currencies');
        setCurrencies(response.data);
      } catch (err) {
        addToast('error', err.message);
      }
    };
    getCurrencies();
  }, [addToast]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async ({ newValue, currency }) => {
        try {
          await updateCurrency({
            currency,
            newValue: Number(newValue.replace('$', '')),
          });
          addToast('success', `Moeda ${currency} atualizada para ${newValue}`);
          history.push('/home');
        } catch (err) {
          addToast('error', err.message);
        }
      }}
      validationSchema={validation}
    >
      {(formik: FormikProps<UpdateFormProps>) => {
        const { dirty, isValid, values } = formik;

        return (
          <Form>
            <StyledFormDiv>
              <Field name="currency">
                {({
                  field, // { name, value, onChange, onBlur }
                  meta,
                }: FieldProps) => (
                  <>
                    <Select {...field} />
                    {meta.touched && meta.error && (
                      <Error component="span" name="password" />
                    )}
                  </>
                )}
              </Field>
              {currencies && values.currency && (
                <Title>
                  {`${values.currency}: ${getValueBykey(
                    currencies,
                    values.currency,
                  )} (valor atual)`}
                </Title>
              )}
              <Field name="newValue">
                {({
                  field, // { name, value, onChange, onBlur }
                  meta,
                }: FieldProps) => (
                  <>
                    <Input
                      isCurrency
                      type="text"
                      placeholder="ex: 5.44"
                      {...field}
                    />
                    {meta.touched && meta.error && (
                      <Error component="span" name="password" />
                    )}
                  </>
                )}
              </Field>
              <ButtonContainer>
                <Button type="submit" disabled={!isValid || !dirty}>
                  Cadastrar
                </Button>
                <Button
                  style={{ width: '100%' }}
                  type="button"
                  disabled={false}
                  onClick={() => history.push('/home')}
                >
                  Voltar
                </Button>
              </ButtonContainer>
            </StyledFormDiv>
          </Form>
        );
      }}
    </Formik>
  );
};
