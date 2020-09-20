import React from 'react';
import { useToast } from '../../context/ToastContext';

export const Home = () => {
  const { addToast } = useToast();

  React.useEffect(() => {
    addToast('success', 'testandoo');
  }, [addToast]);
  return (
    <>
      <h1>Home</h1>
    </>
  );
};
