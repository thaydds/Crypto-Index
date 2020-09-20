import React from 'react';
import { Login } from './containers';
import { AuthProvider } from './context/AuthContext';

export const App = () => (
  <AuthProvider>
    <Login />
  </AuthProvider>
);
