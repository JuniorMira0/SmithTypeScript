import { Request, Response } from 'express';
import Products from '../interfaces/products.interfaces';
import productService from '../service/products.service';

const createProduct = async (req: Request, res: Response) => {
  const { name, amount }: Products = req.body;
  const productId = await productService.createProduct({ name, amount });
  const result = {
    id: productId,
    name,
    amount,
  };
  res.status(201).json(result);
};

const getAllProducts = async (_req: Request, res: Response) => {
  const result = await productService.getAllProducts();

  res.status(200).json(result);
};

export = {
  createProduct,
  getAllProducts,
};