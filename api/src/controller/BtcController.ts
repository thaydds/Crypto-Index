import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import GenerateBitcoinPrices from '../services/GenerateBitcoinPrices';
import validate from '../utils';

class BtcController {
  static async store(_: Request, response: Response): Promise<Response> {
    const bitCoinPrices = await new GenerateBitcoinPrices().execute();

    return response.json({ ...bitCoinPrices });
  }

  static updateCurrency(request: Request, response: Response): Response {
    const rawdata = fs.readFileSync(
      path.join(__dirname, '../currencies.json'),
      'utf-8',
    );

    const currencies = JSON.parse(rawdata);

    const { currency, value } = request.body;
    validate(
      !currency && !currency,
      'os campos value e currency são obrigatorios',
    );

    const validateCurrency = ['BRL', 'EUR', 'CAD'].includes(currency);
    validate(
      !validateCurrency,
      'apenas BRL, EUR, e CAD são validos para currency',
    );

    const validateValue = typeof value === 'number' && value > 0;
    validate(!validateValue, 'value precisa ser do tipo number');

    if (validateCurrency && validateValue) {
      const newCurrencies = {
        ...currencies,
        [currency]: value.toFixed(3) as number,
      };

      fs.writeFileSync(
        path.join(__dirname, '../currencies.json'),
        JSON.stringify(newCurrencies),
      );

      return response.json({ message: 'update realizado com sucesso' });
    }

    return response.status(400).json({ message: 'algo deu errado' });
  }
}

export default BtcController;
