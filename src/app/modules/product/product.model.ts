import { model, Schema } from 'mongoose';
import Book from './product.interface';

const bookSchema = new Schema<Book>(
  {
    id: {
      type: String,
      required: [true, 'id must needed'],
      unique: true,
    },
    title: {
      type: String,
      required: [true, 'title must be needed'],
    },
    author: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    quantity: {
      type: Number,
    },
    inStock: {
      type: Boolean,
    },
  },
  { timestamps: true },
);
const ProductModel = model<Book>('Product', bookSchema);
export default ProductModel;
