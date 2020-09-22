import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { Login } from '../../containers';

describe('LoginForm', () => {
  it('should be able to render register form when click in register button', async () => {
    const { getByText } = render(<Login />);

    const registerInput = getByText('Cadastre-se');
    fireEvent.click(registerInput);

    expect(getByText('Já possui uma conta?')).toBeTruthy();
  });
});
