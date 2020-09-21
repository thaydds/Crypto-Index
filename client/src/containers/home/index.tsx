import React, { useState } from 'react';
import { Input, AnimatedText } from '../../components';
import {
  CardContainer,
  HomeContainer,
  StyledCard,
  StyledH2,
} from './Home.styled';
import { useApp } from '../../context/AppContext';

const getRate = (locale: string, currency: string, value: number) => {
  const rate = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(value);

  return rate;
};
export const Home = () => {
  const [value, setValue] = useState(1);
  const { getData, bpi } = useApp();

  React.useEffect(() => {
    getData();
  }, [getData]);
  return (
    <>
      <AnimatedText />
      <HomeContainer>
        <StyledH2>Bitcoin</StyledH2>
        <Input
          style={{ textAlign: 'center' }}
          placeholder=""
          type="number"
          min="1"
          width="100"
          value={value}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setValue(Number(event.target.value))
          }
        />
        <CardContainer>
          {bpi.map((data) => (
            <StyledCard key={data.code}>
              <p>{data.code}</p>
              <span>
                {getRate(data.locale, data.code, data.rate_float * value)}
              </span>
            </StyledCard>
          ))}
        </CardContainer>
      </HomeContainer>
    </>
  );
};
