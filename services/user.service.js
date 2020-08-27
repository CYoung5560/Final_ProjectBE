const User = require('../models/user.model');
const Roles = require('../utils/roles');
const passport = require('passport');
const jwt = require('jsonwebtoken');

exports.login = async (request, response) => {

    try {
        passport.authenticate('local', { session: false }, (err, user, info) => {
            console.log(user);
            console.log(err);
            if (err) {
                return next(err);
            }

            if (!user) {
                return next(err);
            }

            request.logIn(user, { session: false }, (err) => {
                if (err) {
                    return next(err);
                }
                const token = jwt.sign({ userId: user._id, username: user.username }, 'key3892', { expiresIn: '24h' });
                console.log(token);
                return { user, token };
            });
        })(request, response, next);
    } catch (error) {
        throw Error('user.service.js -> Issue authenticating login');
    }
};

exports.signup = async (username, password) => {

    const newUser = {
        username: username,
        role: Roles.ROLES.Customer
    };

    try {
        console.log(newUser);
        const savedUser = await User.register(newUser, password);
        console.log(savedUser);
        return savedUser;
    } catch (error) {
        throw Error('user.service.js -> ');
    }
};