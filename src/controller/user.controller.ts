import { Request, Response } from 'express';
import userService from '../service/user.services';

const createUser = async (req: Request, res: Response) => {
  const { username, classe, level, password } = req.body;
  const create = await userService.createUser({ username, classe, level, password });

  res.status(201).json(create);
};

export = {
  createUser,
};