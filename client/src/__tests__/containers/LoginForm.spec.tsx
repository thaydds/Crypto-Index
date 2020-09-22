import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { LoginForm } from '../../containers';

describe('LoginForm', () => {
  it('should be able display an erro when login email input is empty', async () => {
    const { getByPlaceholderText, getByTestId } = render(<LoginForm />);

    const emailInput = getByPlaceholderText('Email');

    await waitFor(() => {
      fireEvent.blur(emailInput);
    });

    expect(getByTestId('emailError')).toBeTruthy();
  });
  it('should be able display an erro when login email isvalid', async () => {
    const { getByPlaceholderText, getByText } = render(<LoginForm />);

    const emailInput = getByPlaceholderText('Email');

    await waitFor(() => {
      fireEvent.change(emailInput, { target: { value: 'email.invalido.com' } });
      fireEvent.blur(emailInput);
    });

    expect(getByText('Digite um Email valido')).toBeTruthy();
  });
  it('should be able display an erro when password input empty', async () => {
    const { getByPlaceholderText, getByTestId } = render(<LoginForm />);

    const passwordInput = getByPlaceholderText('Password');

    await waitFor(() => {
      fireEvent.blur(passwordInput);
    });

    expect(getByTestId('passwordError')).toBeTruthy();
  });
  it('should be able display an erro when password havent length === 6', async () => {
    const { getByPlaceholderText, getByTestId } = render(<LoginForm />);

    const passwordInput = getByPlaceholderText('Password');

    await waitFor(() => {
      fireEvent.change(passwordInput, { target: { value: '1234567' } });

      fireEvent.blur(passwordInput);
    });

    expect(getByTestId('passwordError')).toBeTruthy();
  });
  it('should be able display an erro when password have letters', async () => {
    const { getByPlaceholderText, getByTestId } = render(<LoginForm />);

    const passwordInput = getByPlaceholderText('Password');

    await waitFor(() => {
      fireEvent.change(passwordInput, { target: { value: 'as1234' } });

      fireEvent.blur(passwordInput);
    });

    expect(getByTestId('passwordError')).toBeTruthy();
  });
});
