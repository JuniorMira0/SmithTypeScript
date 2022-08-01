import Products from '../interfaces/products.interfaces';
import productModel from '../models/products.models';

const createProduct = async (product: Products) => {
  const productId = await productModel.create(product);
  return productId;
};

export = {
  createProduct,
};