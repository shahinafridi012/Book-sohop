import { Schema, model } from 'mongoose';
import { Order } from './order.intrerface';

const OrderSchema = new Schema<Order>({
  email: {
    type: String,
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
  },
});
const OrderModel = model<Order>('Order', OrderSchema);
export default OrderModel;
