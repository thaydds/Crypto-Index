import { Router } from 'express';
import UserController from '../controller/UserController';
import ValidateAuth from '../middlewares/validateAuth';

const usersRouter = Router();

usersRouter.post('/', UserController.store);

usersRouter.get('/', ValidateAuth, UserController.findAll);

export default usersRouter;
