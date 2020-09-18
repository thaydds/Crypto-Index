import { Router } from 'express';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import btcRouter from './btc.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/btc', btcRouter);

export default routes;
