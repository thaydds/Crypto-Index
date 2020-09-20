import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Routes } from './routes';

export const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </BrowserRouter>
);
