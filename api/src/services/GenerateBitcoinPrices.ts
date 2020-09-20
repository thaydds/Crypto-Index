import axios from 'axios';
import currencies from '../currencies.json';

interface Currencie {
  code: string;
  rate: string;
  description: string;
  // eslint-disable-next-line camelcase
  rate_float: number;
}

const getRate = (
  locale: string,
  currency: string,
  currencyVale: string,
  dollar: number,
) => {
  const rate = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(Number((parseFloat(currencyVale) * dollar).toFixed(4)));

  return rate;
};

const getRateFloat = (currencyValue: string, dollar: number) =>
  Number((parseFloat(currencyValue) * dollar).toFixed(4));

class GenerateBitcoinPrices {
  async execute(): Promise<any> {
    let getPrices = {} as any;

    await axios
      .get('https://api.coindesk.com/v1/bpi/currentprice/CNY.json')
      .then(response => {
        getPrices = { ...response.data };
      })
      .catch(error => {
        console.log('error', error);
      });

    const dolarPrice = getPrices.bpi.USD.rate_float;

    const newPrices = {
      ...getPrices,
      bpi: {
        USD: {
          ...getPrices.bpi.USD,
          rate: new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(getPrices.bpi.USD.rate_float),
        },
        CNY: {
          ...getPrices.bpi.CNY,
          rate: new Intl.NumberFormat('zh-cn', {
            style: 'currency',
            currency: 'CNY',
          }).format(getPrices.bpi.CNY.rate_float),
        },
        BRL: {
          code: 'BRL',
          rate: getRate('pt-BR', 'BRL', currencies.BRL, dolarPrice),
          description: 'Brazilian Real',
          rate_float: getRateFloat(currencies.BRL, dolarPrice),
        },
        EUR: {
          code: 'EUR',
          rate: getRate('de-DE', 'EUR', currencies.EUR, dolarPrice),
          description: 'Euro',
          rate_float: getRateFloat(currencies.EUR, dolarPrice),
        },
        CAD: {
          code: 'CAD',
          rate: getRate('en-CA', 'CAD', currencies.CAD, dolarPrice),
          description: 'Canadian Dollar',
          rate_float: getRateFloat(currencies.CAD, dolarPrice),
        },
      },
    };

    return newPrices;
  }
}

export default GenerateBitcoinPrices;
