import User from '../interfaces/user.interfaces';
import connection from './connection';

const createUser = async (user: User) => {
  const { username, classe, level, password } = user;
  const create = await connection.execute(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
    [username, classe, level, password],
  );
  return create;
};

export = {
  createUser,
};