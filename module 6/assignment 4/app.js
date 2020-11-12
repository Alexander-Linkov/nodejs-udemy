const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

const users = [];

// Form to add a new user
router.get('/', (req, res, next) => {
    res.render('add-user', {
        pageTitle: 'Add new user',
        path: '/'
    })
})

// Adding a user
router.post('/users', (req, res, next) => {
    users.push({ user: {username: req.body.username }})
    res.redirect('/users');
})

// Get a list of users
router.get('/users', (req, res, next) => {
    res.render('users', {
        pageTitle: 'Users',
        users: users,
        path: '/users'
    })
    console.log(users)
})

app.use(router);

app.use((req,res,next) => {
    console.log('Page not found!');
    res.status(404).render('404', {pageTitle: 'Page not found!', path: ''});
})

app.listen(3000);