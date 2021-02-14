import React from 'react';
import { Form, Formik, Field, FieldProps, FormikProps } from 'formik';
import * as yup from 'yup';
import { Button, Input } from '../../components';
import { StyledFormDiv, Error } from './styles';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';

const initialValues = {
  email: '',
  password: '',
};

interface LoginFormProps {
  email: string;
  password: string;
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
});

export const LoginForm = () => {
  const { login } = useAuth();
  const { addToast } = useToast();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async ({ email, password }) => {
        try {
          await login({ email, password });
          addToast('success', 'Login realizado com sucesso.');
        } catch (err) {
          addToast('error', err.message);
        }
      }}
      validationSchema={validation}
    >
      {(formik: FormikProps<LoginFormProps>) => {
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
                    <Input
                      data-testid="email"
                      type="text"
                      placeholder="Email"
                      {...field}
                    />
                    {meta.touched && meta.error && (
                      <>
                        <Error
                          data-testid="emailError"
                          component="span"
                          name="email"
                        />
                      </>
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
                      <Error
                        data-testid="passwordError"
                        component="span"
                        name="password"
                      />
                    )}
                  </>
                )}
              </Field>
              <Button type="submit" disabled={!isValid || !dirty}>
                Login
              </Button>
            </StyledFormDiv>
          </Form>
        );
      }}
    </Formik>
  );
};
