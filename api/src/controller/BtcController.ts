import { Request, Response } from 'express';
import writeJsonFile from 'write-json-file';
// import AppError from '../errors/AppError';
import currencies from '../currencies.json';
import GenerateBitcoinPrices from '../services/GenerateBitcoinPrices';

class BtcController {
  static async store(_: Request, response: Response): Promise<Response> {
    const bitCoinPrices = await new GenerateBitcoinPrices().execute();

    return response.json({ ...bitCoinPrices });
  }

  static updateCurrency(request: Request, response: Response): Response {
    const { currency, value } = request.body;

    const validateCurrency = ['BRL', 'EUR', 'CAD'].includes(currency);
    const validateValue = typeof value === 'number' && value > 0;

    if (validateCurrency && validateValue) {
      (async () => {
        await writeJsonFile('./src/currencies.json', {
          ...currencies,
          [currency]: value.toFixed(3) as number,
        });
      })();

      return response.json({ message: 'update realizado com sucesso' });
    }

    return response.status(400).json({ message: 'algo deu errado' });
  }
}

export default BtcController;
