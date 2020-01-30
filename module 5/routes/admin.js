const express = require('express');

const router = express.Router();

router.post('/add-product', (req, res, next) => {
    console.log('in product page middle');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="sumbit">Add Product</button></input></form>');
});

router.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;