import Products from '../interfaces/products.interfaces';
import productModel from '../models/products.models';

const createProduct = async (product: Products) => {
  const productId = await productModel.createProduct(product);
  return productId;
};

const getAllProducts = async () => {
  const result = await productModel.getAllProducts();
  return result;
};

export = {
  createProduct,
  getAllProducts,
};