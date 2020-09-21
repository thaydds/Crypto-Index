import React from 'react';
import { Form, Formik, Field, FieldProps, FormikProps } from 'formik';
import * as yup from 'yup';
import { useApp } from '../../context/AppContext';
import { useToast } from '../../context/ToastContext';
import { Button, Input } from '../../components';
import { StyledFormDiv, Error } from './LoginForm.styled';

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

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async ({ newValue, currency }) => {
        try {
          addToast('success', 'Usuário cadastrado com sucesso.');
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
              <Field name="email">
                {({
                  field, // { name, value, onChange, onBlur }
                  meta,
                }: FieldProps) => (
                  <>
                    <Input type="text" placeholder="Email" {...field} />
                    {meta.touched && meta.error && (
                      <Error component="span" name="email" />
                    )}
                  </>
                )}
              </Field>
              <Field name="password">
                {({
                  field, // { name, value, onChange, onBlur }
                  meta,
                }: FieldProps) => (
                  <>
                    <Input type="password" placeholder="Password" {...field} />
                    {meta.touched && meta.error && (
                      <Error component="span" name="password" />
                    )}
                  </>
                )}
              </Field>
              <Field name="repassword">
                {({
                  field, // { name, value, onChange, onBlur }
                  meta,
                }: FieldProps) => (
                  <>
                    <Input type="password" placeholder="Password" {...field} />
                    {meta.touched && meta.error && (
                      <Error component="span" name="repassword" />
                    )}
                  </>
                )}
              </Field>
              <Button type="submit" disabled={!isValid || !dirty}>
                Cadastrar
              </Button>
            </StyledFormDiv>
          </Form>
        );
      }}
    </Formik>
  );
};
