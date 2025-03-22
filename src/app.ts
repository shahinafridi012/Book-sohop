import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/modules/product/product.route';
import { OrderRoutes } from './app/modules/order/order.route';
const app: Application = express();
// const port = 3000;
//parsers

app.use(express.json());
app.use(cors());

// application routes
app.use('/api/products', ProductRoutes);
app.use('/api', OrderRoutes);

const getAController = (req: Request, res: Response) => {
  const a = 10;
  res.send({ a });
};

app.get('/', getAController);
// console.log(process.cwd());

export default app;
