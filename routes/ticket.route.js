const express = require('express');
const passport = require('passport');

const TicketController = require('../controllers/ticket.controller');
const router = require('./movie.route');
const ROLES = require('../utils/roles').ROLES;
const checkIsInRole = require('../utils/auth').checkIsInRole;

router.use((request, response, next) => {
    console.log(request.method, `user${request.url}`);
    next();
});

router.get('', passport.authenticate('jwt', { session: false }), TicketController.getTicket);
router.post('', passport.authenticate('jwt', { session: false }), TicketController.createTicket);
router.put('', passport.authenticate('jwt', { session: false }), checkIsInRole(ROLES.Admin), TicketController.updateTicket);
router.delete('', passport.authenticate('jwt', { session: false }), checkIsInRole(ROLES.Admin), TicketController.deleteTicket);