import express from 'express';
import routerProduct from './routers/product.router';
import routerUser from './routers/user.router';
import routerOrders from './routers/orders.router';

const app = express();

app.use(express.json());

app.use('/', routerProduct, routerUser, routerOrders);

export default app;
