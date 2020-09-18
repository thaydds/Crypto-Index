import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../models/User';
import AppError from '../errors/AppError';

interface Resquest {
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ email, password }: Resquest): Promise<User> {
    const usersRepository = getRepository(User);

    const checkIserExists = await usersRepository.findOne({
      where: { email },
    });

    if (checkIserExists) {
      throw new AppError('Email already exists', 401);
    }

    const hashedPassword = await hash(password, 8);
    const user = usersRepository.create({
      email,
      password: hashedPassword,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
