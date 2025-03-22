import { Order } from './order.intrerface';
import OrderModel from './order.model';

const createOrderInDB = async (Order: Order) => {
  const result = await OrderModel.create(Order);
  return result;
};

const calculateTotalRevenue = async () => {
  const result = await OrderModel.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: { $multiply: ['$totalPrice', 1] } },
      },
    },
  ]);
  return result.length > 0 ? result[0].totalRevenue : 0;
};

export const OrderService = {
  createOrderInDB,
  calculateTotalRevenue,
};
