import { Request, Response } from 'express';
import { OrderService } from './order.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const { Order: OrderData } = req.body;
    const result = await OrderService.createOrderInDB(OrderData);

    res.status(200).json({
      status: true,
      message: 'Order created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
export const OrderControllers = {
  createProduct,
};
