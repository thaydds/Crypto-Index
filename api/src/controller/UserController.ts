import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import * as EmailValidator from 'email-validator';
import UsersRepository from '../repositories/UsersRepository';
import validate from '../utils';

import CreateUserService from '../services/CreateUserService';

class UserController {
  static async store(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    validate(!email && !password, 'os campos emails e senhas são obrigatorios');
    validate(
      !EmailValidator.validate(email),
      'formato invalido. ex: teste@gmail.com',
    );
    validate(
      !(/^[0-9]*$/.test(password) && password.toString().length === 6),
      'A senha deve ser composta apenas por digitos e possuir 6 digitos obrigarios',
    );

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
