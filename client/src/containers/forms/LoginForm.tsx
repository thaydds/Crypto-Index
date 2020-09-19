import React from 'react';
import { Form, Formik, Field, ErrorMessage, FieldProps } from 'formik';
import * as yup from 'yup';
import { Button, Input } from '../../components';
import { StyleFlex, StyledContainer, StyledFormDiv } from './LoginForm.styled';

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

export const LoginForm = () => (
  <Formik
    initialValues={initialValues}
    onSubmit={({ email, password }) => console.log(email, password)}
    validationSchema={validation}
  >
    {() => {
      return (
        <Form>
          <StyledContainer className="container">
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
            <StyleFlex>
              <p>Não possui uma conta?</p>
              <Button type="button">Cadastre-se</Button>
            </StyleFlex>
          </StyledContainer>
        </Form>
      );
    }}
  </Formik>
);
