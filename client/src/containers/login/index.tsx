import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../components';
import { LoginForm, RegisterForm } from '..';

export const StyledContainer = styled.div<{ inverse: boolean }>`
  display: flex;
  justify-content: space-around;
  flex-direction: ${(props) => (props.inverse ? 'row-reverse' : 'row')};
  align-items: center;
  max-width: 600px;
  margin: 30vh auto;

  @media all and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyleFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <StyledContainer inverse={!isLogin}>
      {isLogin && <LoginForm />}
      {!isLogin && <RegisterForm />}
      <StyleFlex>
        <p>{isLogin ? 'Não possui uma conta?' : 'Já possui uma conta?'}</p>
        <Button
          data-testid="loginPageButton"
          onClick={() => setIsLogin(!isLogin)}
          type="button"
        >
          {isLogin ? 'Cadastre-se' : 'Logar'}
        </Button>
      </StyleFlex>
    </StyledContainer>
  );
};
