import React from 'react';
import { Form, Formik, Field, FieldProps, FormikProps } from 'formik';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { useToast } from '../../context/ToastContext';
import { useApp } from '../../context/AppContext';
import { Button, Select } from '../../components';
import { CurrencyInput } from '../../components/Input/CurrencyInput';

import { StyledFormDiv, Error, ButtonContainer } from './LoginForm.styled';

const initialValues = {
  currency: '',
  newValue: '',
};

interface UpdateFormProps {
  currency: string;
  newValue: string;
}

const validation = yup.object().shape({
  currency: yup.string().required('Email e um campo obrigatorio'),
  newValue: yup.string().required('Password e um campo obrigatorio'),
});

export const UpdateForm = () => {
  const { addToast } = useToast();
  const { updateCurrency } = useApp();
  const history = useHistory();

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
        const { dirty, isValid } = formik;

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
              <Field name="newValue">
                {({
                  field, // { name, value, onChange, onBlur }
                  meta,
                }: FieldProps) => (
                  <>
                    <CurrencyInput
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
