const express = require('express');
const router = express.Router();


// GET /admin/add-product
router.get('/add-product', (req, res, next) => {
    console.log('in product page middle');
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="sumbit">Add Product</button></input></form>');
});


// POST /admin/add-product
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;