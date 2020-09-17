import { EntityRepository, Repository } from 'typeorm';
import User from '../models/User';

@EntityRepository(User)
class UserRepository extends Repository<User> {
  public async findUsers(): Promise<User[]> {
    const usersList = await this.find();
    return usersList;
  }
}

export default UserRepository;
