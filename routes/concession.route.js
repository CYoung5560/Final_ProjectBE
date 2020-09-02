const express = require('express');
const passport = require('passport');

const ConcessionController = require('../controllers/concession.controller');
const ROLES = require('../utils/roles').ROLES;
const checkIsInRole = require('../utils/auth').checkIsInRole;

const router = express.Router();

router.post('', passport.authenticate('jwt', { session: false }), checkIsInRole(ROLES.Customer), ConcessionController.create);

module.exports = router;