import React from 'react';
import { useAuth } from '../../context/AuthContext';

export const Home = () => {
  const { logout } = useAuth();

  return (
    <>
      <button type="button" onClick={() => logout()}>
        Logout
      </button>

      <h1>Home</h1>
    </>
  );
};
