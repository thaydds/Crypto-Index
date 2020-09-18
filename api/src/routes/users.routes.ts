import { Router } from 'express';
import UserController from '../controller/UserController';

const usersRouter = Router();

usersRouter.post('/', UserController.store);

usersRouter.get('/', UserController.findAll);

export default usersRouter;
