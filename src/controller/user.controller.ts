import { Request, Response } from 'express';
import createToken from '../helper/jwt';
import userService from '../service/user.services';

const createUser = async (req: Request, res: Response) => {
  const { username, classe, level, password } = req.body;
  await userService.createUser({ username, classe, level, password });

  const token = createToken(username);
  res.status(201).json({ token });
};

export = {
  createUser,
};