import Jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const auth = { secret: String(process.env.JWT_SECRET) };

const createToken = (data: string) => {
  const token = Jwt.sign({ data }, auth.secret, {
    expiresIn: '2h',
    algorithm: 'HS256',
  });
  return token;
};

export default createToken;