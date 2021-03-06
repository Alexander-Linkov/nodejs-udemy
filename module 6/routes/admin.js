const path = require('path');

const express = require('express');
const router = express.Router();

const rootDir = require('../util/path');

const products = [];


// GET /admin/add-product
router.get('/add-product', (req, res, next) => {
    //console.log('in product page middle');
    res.render('add-product', { 
        pageTitle: 'Add Product', 
        path: '/admin/add-product',
        activeAddProduct: true,
        productCSS: true,
        formsCSS: true
    });
});


// POST /admin/add-product
router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title })
    console.log(products);
    res.redirect('/');
});

exports.routes = router;
exports.products = products;