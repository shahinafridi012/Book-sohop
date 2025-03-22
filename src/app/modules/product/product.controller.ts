import { Request, Response } from 'express';
import { ProductServices } from './product.service';
import bookSchema from './product.zod.validation';

const createProduct = async (req: Request, res: Response) => {
  try {
    const { Product: productData } = req.body;
    //will call service func to send this data

    const ZodParsedData = bookSchema.parse(productData);

    const result = await ProductServices.createProductIntoDB(ZodParsedData);
   
    // send response
    res.status(200).json({
      success: true,
      message: 'Book created successfully',
      data: result,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({
        status: false,
        message: error.message || 'Something went wrong',
        error,
      });
    } else {
      res.status(500).json({
        status: false,
     
      });
    }
  }
};
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsFromDB();

    res.status(200).json({
      status: true,
      message: 'Books retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleProducts = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductServices.getSingleProductsFromDB(productId);

    res.status(200).json({
      status: true,
      message: 'Books retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const DeleteSingleDataInDB = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result =
      await ProductServices.getSingleProductDeleteFromDB(productId);

    res.status(200).json({
      status: true,
      message: 'Book deleted successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateProduct = req.body;

    const result = await ProductServices.updateProductInDB(
      productId,
      updateProduct,
    );
    res.status(200).json({
      status: true,
      message: 'Book updated successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProducts,
  DeleteSingleDataInDB,
  updateProduct,
};
