import React, { useState } from 'react';
import { Input, AnimatedText } from '../../components';
import {
  CardContainer,
  HomeContainer,
  StyledCard,
  StyledH2,
  StyledText,
} from './styles';
import { useApp } from '../../context/AppContext';
import { useToast } from '../../context/ToastContext';

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
  const { addToast } = useToast();

  React.useEffect(() => {
    const getBtc = async () => {
      try {
        await getData();
      } catch (err) {
        addToast('error', err.message);
      }
    };
    getBtc();
  }, [getData, addToast]);
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
        <StyledText>
          Powered by
          <a href="https://www.coindesk.com/price/bitcoin">Coindex</a>
        </StyledText>
      </HomeContainer>
    </>
  );
};
