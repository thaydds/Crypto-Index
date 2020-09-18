import axios from 'axios';

class GenerateBitcoinPrices {
  async execute(): Promise<any> {
    let getPrices = {};

    await axios
      .get('https://api.coindesk.com/v1/bpi/currentprice/CNY.json')
      .then(response => {
        getPrices = { ...response.data };
      })
      .catch(error => {
        console.log('error', error);
      });

    return getPrices;
  }
}

export default GenerateBitcoinPrices;
