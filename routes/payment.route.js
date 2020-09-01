const express = require('express');
const passport = require('passport');
const stripe = require('stripe')('sk_test_51HMY0fEd3ZxUQOxhVfOIE2hs0yFYQqVF8c2FK5T11MlNnDKE9FlyHC7m88jcTBwxq3WhCRyWiye6md2JWXiu00h500R0sJQhwW');

const ROLES = require('../utils/roles').ROLES;
const checkIsInRole = require('../utils/auth').checkIsInRole;

const router = express.Router();

router.post('/payment', passport.authenticate('jwt', { session: false }), async (request, response) => {
    // calculate the cost in on the backend (here) and assign to 'amount' within the intent
    const paymentIntent = await stripe.paymentIntents.create({
        amount: 10 * 100, // £1.00
        currency: 'gbp',
        metadata: { integration_check: 'accept_a_payment' }
    });

    response.json({ client_secret: paymentIntent.client_secret, user: request.user.username });
});

module.exports = router;