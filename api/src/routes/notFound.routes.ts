import { Router } from 'express';

const notFoundRouter = Router();

notFoundRouter.all('*', (_, res) =>
  res.status(404).json({ message: 'Endpoint não encontrado' }),
);

export default notFoundRouter;
