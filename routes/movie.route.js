const express = require('express');

const MovieController = require('../controllers/movie.controller');

const router = express.Router();

// Router middleware, activates on every request.
router.use((request, response, next) => {
    // Log request to console.
    console.log(request.method, `movie${request.url}`);
    // continue onto requested route.
    next();
});

// Middleware to validate a route
router.param('/:id', (request, response, next) => {
    // do some validation.
    console.log(`Validating ${request.url}`);
    // Once validation is done, save new item in request.
    // go to next thing (/:id route).
    next();
});

// The routes will need to be modified to reflect using the request body at some point.
// Pass control (via callback) to MovieController.
router.get('/:id', MovieController.getMovieById);

router.post('/:title', MovieController.createMovie);

module.exports = router;