import express from 'express';
import {
    createProductController,
    getProductController,
    getAllProductsController,
    updateProductController,
    deleteProductController
} from '../Controllers/productsControllers.js';

const router = express.Router();

router.post('/', createProductController);
router.get('/:id', getProductController);
router.get('/', getAllProductsController);
router.delete('/:id', deleteProductController);
// ??

export default router;
