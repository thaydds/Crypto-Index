import React from 'react';
import { Form, Formik, Field, FieldProps, FormikProps } from 'formik';
import * as yup from 'yup';
import { useApp } from '../../context/AppContext';
import { useToast } from '../../context/ToastContext';
import { Button, Input } from '../../components';
import { StyledFormDiv, Error } from './LoginForm.styled';

const initialValues = {
  email: '',
  password: '',
  repassword: '',
};

interface RegisterFormProps {
  email: string;
  password: string;
  repassword: string;
}

const validation = yup.object().shape({
  email: yup
    .string()
    .email('Digite um Email valido')
    .required('Email e um campo obrigatorio'),
  password: yup
    .string()
    .required('Password e um campo obrigatorio')
    .length(6, 'O Password deve ter 6 digitos')
    .matches(/^\d+$/, 'Apenas digitos são permitidos'),
  repassword: yup
    .string()
    .required('Password e um campo obrigatorio')
    .length(6, 'O Password deve ter 6 digitos')
    .matches(/^\d+$/, 'Apenas digitos são permitidos')
    .oneOf([yup.ref('password')], 'Passwords devem ser iguais'),
});

export const RegisterForm = () => {
  const { register } = useApp();
  const { addToast } = useToast();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async ({ email, password }) => {
        try {
          await register({ email, password });
          addToast('success', 'Usuário cadastrado com sucesso.');
        } catch (err) {
          addToast('error', err.message);
        }
      }}
      validationSchema={validation}
    >
      {(formik: FormikProps<RegisterFormProps>) => {
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
