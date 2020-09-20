import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainAppProvider from './context';
import { Routes } from './routes';

export const App = () => (
  <BrowserRouter>
    <MainAppProvider>
      <Routes />
    </MainAppProvider>
  </BrowserRouter>
);
