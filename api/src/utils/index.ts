import AppError from '../errors/AppError';

const validate = (condition: boolean, message: string): void => {
  if (condition) {
    throw new AppError(message, 400);
  }
};

export default validate;
