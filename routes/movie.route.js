const express = require('express');
const passport = require('passport');

const MovieController = require('../controllers/movie.controller');
const ROLES = require('../utils/roles').ROLES;
const checkIsInRole = require('../utils/auth').checkIsInRole;

const router = express.Router();

// Router middleware, activates on every request.
router.use((request, response, next) => {
    // Log request to console.
    console.log(request.method, `movie${request.url}`);
    // continue onto requested route.
    next();
});

// Middleware to validate a route
// router.param('/:id', (request, response, next) => {
//     // do some validation.
//     console.log(`Validating ${request.url}`);
//     // Once validation is done, save new item in request.
//     // go to next thing (/:id route).
//     next();
// });

// The routes will need to be modified to reflect using the request body at some point.
// Pass control (via callback) to MovieController.
router.get('/:id', MovieController.getMovieById);

router.post('/', passport.authenticate('jwt', { session: false }), checkIsInRole(ROLES.Admin), MovieController.createMovie);

module.exports = router;