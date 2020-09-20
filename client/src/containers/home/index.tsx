import React, { useState } from 'react';
import styled from 'styled-components';
import { Nav, Input } from '../../components';
import { useAuth } from '../../context/AuthContext';
import { useApp } from '../../context/AppContext';

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
  width: 1000px;
`;

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 159px;
`;
export const Home = () => {
  const [value, setValue] = useState(1);
  const { logout } = useAuth();
  const { getData, bpi } = useApp();

  console.log('bpi', bpi);

  React.useEffect(() => {
    getData();
  }, [getData]);
  return (
    <>
      <Nav handleClick={() => logout()} />
      <HomeContainer>
        <h1>Bem vindo</h1>
        <Input
          placeholder=""
          type="number"
          value={value}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setValue(Number(event.target.value))
          }
        />
        <ValueContainer>
          {bpi.map((data) => (
            <ValueDiv key={data.code}>{data.rate_float * value}</ValueDiv>
          ))}
        </ValueContainer>
      </HomeContainer>
    </>
  );
};
