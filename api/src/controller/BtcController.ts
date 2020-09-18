import { Request, Response } from 'express';
import GenerateBitcoinPrices from '../services/GenerateBitcoinPrices';

class BtcController {
  static async store(_: Request, response: Response): Promise<Response> {
    const bitCoinPrices = await new GenerateBitcoinPrices().execute();

    return response.json({ ...bitCoinPrices });
  }
}

export default BtcController;
