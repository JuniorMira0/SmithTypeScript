import ordersModels from '../models/orders.models';

const getAllOrders = async () => {
  const getOrders = await ordersModels.getAllOrders();

  return getOrders;
};

export = {
  getAllOrders,
};