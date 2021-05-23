const express = require('express');
const router = express.Router();
const productsMocks = require('../../utils/mocks/products');
const ProductsService = require('../../services/products');

const productsService = new ProductsService();

router.get('/', async function(req, res, next) {
    const { tags } = req.query;

    try {
        const products = await productsService.getProducts({ tags });

        res.status(200).json({
            data: products,
            message: 'products listed'
        });
    } catch(err) {
        next(err);
    }
    
})

router.get('/:productId', async function(req, res, next) {
    const { productId } = req.params;

    try {
        const product = await productsService.getProduct({ productId });
    
        res.status(200).json({
            data: product,
            message: 'product retrieved'
        });
    } catch(err) {
        next(err);
    }
})

router.post('/', async function(req, res, next) {
    try {
        const { body: productBody } = req;
        const product = await productsService.createProduct({ productBody });
    
        res.status(201).json({
            data: product,
            message: 'product created'
        });
    } catch(err) {
        next(err);
    }
})

router.put('/:productId', async function(req, res, next) {
    const { productId } = req.params;
    const { body: productBody } = req;

    try {
        const product = await productsService.updateProduct({ productId , productBody });
    
        res.status(200).json({
            data: product,
            message: 'product edited'
        });
    } catch(err) {
        next(err);
    }
})

router.delete('/:productId', async function(req,res) {
    const { productId } = req.params;

    try {
        const product = await productsService.deleteProduct( { productId });
    
        res.status(200).json({
            data: product,
            message: 'product deleted'
        });
    }  catch(err) {
        next(err);
    }
})

module.exports = router;