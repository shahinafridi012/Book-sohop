import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

//will call the controller function
router.post('/create-product', ProductControllers.createProduct);
router.get('/', ProductControllers.getAllProducts);
router.get('/:productId', ProductControllers.getSingleProducts)
router.delete('/:productId', ProductControllers.DeleteSingleDataInDB)
router.put('/:productId', ProductControllers.updateProduct)


export const ProductRoutes = router;
