import React from 'react';
import { Form, Formik, Field, ErrorMessage, FieldProps } from 'formik';
import * as yup from 'yup';
import { Button, Input } from '../../components';
import { StyledFormDiv } from './LoginForm.styled';
import { useAuth } from '../../context/AuthContext';

const initialValues = {
  email: '',
  password: '',
};

const validation = yup.object().shape({
  email: yup
    .string()
    .email('Digite um Email valido')
    .required('Email e um campo obrigatorio'),
  password: yup.string().required('Password e um campo obrigatorio'),
});

export const LoginForm = () => {
  const { login } = useAuth();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async ({ email, password }) => {
        try {
          await login({ email, password });
        } catch (err) {
          console.log('Erro', err.message);
        }
      }}
      validationSchema={validation}
    >
      {() => {
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
                      <ErrorMessage component="span" name="email" />
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
                      <ErrorMessage component="span" name="password" />
                    )}
                  </>
                )}
              </Field>
              <Button type="submit">Login</Button>
            </StyledFormDiv>
          </Form>
        );
      }}
    </Formik>
  );
};
