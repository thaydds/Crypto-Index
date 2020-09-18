import { Request, Response } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

class SessionController {
  static async store(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    const authenticateUser = new AuthenticateUserService();
    const { user, token } = await authenticateUser.execute({
      email,
      password,
    });
    return response.json({ user, token });
  }
}

export default SessionController;
