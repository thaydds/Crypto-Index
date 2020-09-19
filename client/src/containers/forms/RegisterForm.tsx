import React from 'react';
import { Form, Formik, Field, ErrorMessage, FieldProps } from 'formik';
import * as yup from 'yup';
import { Button, Input } from '../../components';
import { StyledFormDiv } from './LoginForm.styled';

const initialValues = {
  email: '',
  password: '',
  repassword: '',
};

const validation = yup.object().shape({
  email: yup
    .string()
    .email('Digite um Email valido')
    .required('Email e um campo obrigatorio'),
  password: yup.string().required('Password e um campo obrigatorio'),
  repassword: yup.string().required('Password e um campo obrigatorio'),
});

export const RegisterForm = () => (
  <Formik
    initialValues={initialValues}
    onSubmit={({ email, password, repassword }) =>
      console.log(email, password, repassword)
    }
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
            <Field name="repassword">
              {({
                field, // { name, value, onChange, onBlur }
                meta,
              }: FieldProps) => (
                <>
                  <Input type="password" placeholder="Password" {...field} />
                  {meta.touched && meta.error && (
                    <ErrorMessage component="span" name="repassword" />
                  )}
                </>
              )}
            </Field>
            <Button type="submit">Cadastrar</Button>
          </StyledFormDiv>
        </Form>
      );
    }}
  </Formik>
);
