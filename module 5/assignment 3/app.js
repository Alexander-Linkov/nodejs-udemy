const express = require('express');
const path = require('path');
const router = express.Router();

const app = express();
const rootDir = path.dirname(process.mainModule.filename);

app.use(express.static(path.join(__dirname, 'public')));

// GET /users
router.get('/users', (req, res, next) => {
    console.log('serve users route');
    res.sendFile(path.join(rootDir, 'views', 'users.html'));
});

// GET /
router.get('/', (req, res, next) => {
    console.log('serve root route');
    res.sendFile(path.join(rootDir, 'views', 'index.html'));
});

app.use(router);

app.listen(3000);