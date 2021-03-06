import React from 'react';
import { UpdateForm } from '../forms/UpdateForm';
import { StyledTitle, StyledUpdateContainer } from './styles';

export const Update = () => (
  <StyledUpdateContainer>
    <StyledTitle>Atualizar Moeda</StyledTitle>
    <UpdateForm />
  </StyledUpdateContainer>
);
