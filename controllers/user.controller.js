const UserService = require('../services/user.service');
const User = require('../models/user.model');
const passport = require('passport');

exports.login = async (request, response, next) => {
    passport.authenticate('local');
    // Validation of request params
    try {
        userDetails = await UserService.login(request, response);
        return response.status(200).json({ status: 200, data: userDetails, message: "user.controller -> "});
    } catch(error) {
        return response.status(400).json({ status: 400, message: error.message });
    }
};

exports.signup = async (request, response, next) => {

    // Validation of request params
    try {
        passport.authenticate('local');
        const { username, password } = request.body;
        const newUser = await UserService.signup(username, password);
        return response.status(200).json({ status: 200, data: newUser, message: "user.controller -> "});
    } catch(error) {
        return response.status(400).json({ status: 400, message: error.message });
    }
};

exports.logout = async (request, response, next) => {

    // Validation of request params
    try {
        request.logout();
        request.session.destroy((error) => {
            if (error) throw Error();
        });
        return response.status(200).json({ status: 200, message: "user.controller -> "});
    } catch(error) {
        return response.status(400).json({ status: 400, message: error.message });
    }
};