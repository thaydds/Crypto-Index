import React from 'react';
import styled from 'styled-components';
import { Nav, Input } from '../../components';
import { useAuth } from '../../context/AuthContext';

const ValueDiv = styled.div`
  border: 1px solid black;
  width: 150px;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
`;

const ValueContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 800px;
`;

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 159px;
`;
export const Home = () => {
  const { logout } = useAuth();
  return (
    <>
      <Nav handleClick={() => logout()} />
      <HomeContainer>
        <h1>Bem vindo</h1>
        <Input placeholder="" type="text" />
        <ValueContainer>
          <ValueDiv>6000</ValueDiv>
          <ValueDiv>6000</ValueDiv>
          <ValueDiv>6000</ValueDiv>
          <ValueDiv>6000</ValueDiv>
        </ValueContainer>
      </HomeContainer>
    </>
  );
};
