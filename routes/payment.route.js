const express = require('express');
const passport = require('passport');
const stripe = require('stripe')('sk_test_51HMY0fEd3ZxUQOxhVfOIE2hs0yFYQqVF8c2FK5T11MlNnDKE9FlyHC7m88jcTBwxq3WhCRyWiye6md2JWXiu00h500R0sJQhwW');

const ROLES = require('../utils/roles').ROLES;
const checkIsInRole = require('../utils/auth').checkIsInRole;

const Concession = require('../models/concession.model');

const router = express.Router();

router.post('/payment', passport.authenticate('jwt', { session: false }), async (request, response) => {
    // calculate the cost in on the backend (here) and assign to 'amount' within the intent
    let concession = request.body.concession
    // concession = concession.charAt(0).toUpperCase() + concession.slice(1);

    let price = 0;
    let conObj = Concession.findOne({ concession: concession }).exec(); // returns a query result
    conObj.then(async (document) => { // grab doc out of result
        price = document.price;
        console.log(`Payment processing for price £${price}, concession ${document.concession}`);

        const paymentIntent = await stripe.paymentIntents.create({
            amount: (10 * 10 * price), // £1.00 = 10 * 10
            currency: 'gbp',
            metadata: { integration_check: 'accept_a_payment' }
        });
        console.log('Payment request processed, sending secret');
        response.json({ client_secret: paymentIntent.client_secret, user: request.user.username });
    }).catch(error => {
        response.status(404);
    });
});

module.exports = router;