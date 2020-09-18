import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import UsersRepository from '../repositories/UsersRepository';

import CreateUserService from '../services/CreateUserService';

class UserController {
  static async store(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const createUser = new CreateUserService();
    const user = await createUser.execute({
      email,
      password,
    });
    return response.json(user);
  }

  static async findAll(_: Request, response: Response): Promise<Response> {
    const usersRepository = getCustomRepository(UsersRepository);
    const users = await usersRepository.find();
    return response.json(users);
  }
}

export default UserController;
