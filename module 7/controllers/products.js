const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    //console.log('in product page middle');
    res.render('add-product', { 
        pageTitle: 'Add Product', 
        path: '/admin/add-product',
        activeAddProduct: true,
        productCSS: true,
        formsCSS: true
    });
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    const products = Product.getAll();
    
    res.render('shop', {
        prods: products, 
        pageTitle: 'Shop', 
        path: '/',
        activeShop: true,
        productCSS: true
    });
}