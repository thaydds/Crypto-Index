import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from './components';
import { LoginForm, RegisterForm } from './containers';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 600px;
  margin: 30vh auto;
`;

export const StyleFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <StyledContainer>
      {isLogin && <LoginForm />}
      {!isLogin && <RegisterForm />}
      <StyleFlex>
        <p>{isLogin ? 'Não possui uma conta?' : 'Já possui uma conta?'}</p>
        <Button onClick={() => setIsLogin(!isLogin)} type="button">
          {isLogin ? 'Cadastre-se' : 'Logar'}
        </Button>
      </StyleFlex>
    </StyledContainer>
  );
};
