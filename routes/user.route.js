const express = require('express');
const passport = require('passport');

const UserController = require('../controllers/user.controller');

const router = express.Router();

// Router middleware, activates on every request.
router.use((request, response, next) => {
    // Log request to console.
    console.log(request.method, `user${request.url}`);
    // continue onto requested route.
    next();
});

router.post('/signup', UserController.signup);

router.post('/login', UserController.login);

router.post('/logout', UserController.logout)

module.exports = router;