import { ResultSetHeader } from 'mysql2';
import Products from '../interfaces/products.interfaces';
import connection from './connection';

const createProduct = async (products: Products) => {
  const { name, amount } = products;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  return insertId;
};

const getAllProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM Trybesmith.Products',
  );
  return result;
};

export = {
  createProduct,
  getAllProducts,
};