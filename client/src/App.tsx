import React from 'react';
import styled from 'styled-components';
import { Button, Input } from './components';

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 500px;
  margin: 30vh auto;
`;

const StyledFormDiv = styled.div`
  border: 1px solid lightgray;
  border-radius: 5px;
  display: flex;
  padding: 5px;
  flex-direction: column;
  background-color: white;
`;

const StyleFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const App = () => (
  <StyledContainer className="container">
    <div className="form-div">
      <StyledFormDiv>
        <Input placeholder="Email" type="text" />
        <Input placeholder="Password" type="password" />
        <Button type="button">Login</Button>
      </StyledFormDiv>
    </div>
    <StyleFlex>
      <p>Não possui uma conta?</p>
      <Button type="button">Cadastre-se</Button>
    </StyleFlex>
  </StyledContainer>
);
