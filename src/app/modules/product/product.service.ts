import Book from './product.interface';
import ProductModel from './product.model';

const createProductIntoDB = async (product: Book) => {
  const result = await ProductModel.create(product);
  return result;
};
const getAllProductsFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};
const getSingleProductsFromDB = async (id: string) => {
  const result = await ProductModel.findOne({ id });
  return result;
};
const getSingleProductDeleteFromDB = async (id: string) => {
  const result = await ProductModel.deleteOne({ id });
  return result;
};
const updateProductInDB = async (id:string, updateProduct:Partial<Book>) => {
const result = await ProductModel.updateOne({id}, updateProduct) //  { new: true, runValidators: true } // Return updated book
return result 
};
export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductsFromDB,
  getSingleProductDeleteFromDB,
  updateProductInDB,
};
