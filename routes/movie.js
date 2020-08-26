const express = require('express');
const router = express.Router();

// Router middleware, activates on every request
router.use((request, response, next) => {
    // Log request to console
    console.log(request.method, `movie${request.url}`);
    // continue onto requested route
    next();
});

// Middleware to validate a route
router.param('/:id', (request, response, next) => {
    // do some validation
    console.log('Validating');
    // Once validation is done, save new item in request
    // go to next thing (/:id route)
    next();
});

router.route('/:id')
    .get((request, response) => {
        response.send(`NOT IMPLEMENTED: ${request.params}`);
    });

module.exports = router;