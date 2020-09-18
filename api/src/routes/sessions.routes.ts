import { Router } from 'express';
import SessionController from '../controller/SessionsController';

const sessionsRouter = Router();

sessionsRouter.post('/', SessionController.store);

export default sessionsRouter;
