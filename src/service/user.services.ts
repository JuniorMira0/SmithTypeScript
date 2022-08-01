import User from '../interfaces/user.interfaces';
import userModels from '../models/user.models';

const createUser = async (user: User) => {
  const create = await userModels.createUser(user);

  return create;
};

export = {
  createUser,
};