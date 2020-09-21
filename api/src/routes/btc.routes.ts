import { Router } from 'express';
import BtcController from '../controller/BtcController';
import ValidateAuth from '../middlewares/validateAuth';

const btcRouter = Router();

btcRouter.get('/', ValidateAuth, BtcController.store);

btcRouter.post('/', ValidateAuth, BtcController.updateCurrency);

export default btcRouter;
