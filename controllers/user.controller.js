const UserService = require('../services/user.service');
const User = require('../models/user.model');
const passport = require('passport');
const jwt = require('jsonwebtoken');

exports.login = async (request, response, next) => {

    // Validation of request params
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
                return response.status(200).json({ status: 200, success: true, data: { user: user }, message: "user.controller -> ", token: token });
              });
        })(request, response, next);
        // console.log(request.user);
        // userDetails = await UserService.login(request, response);
        // return response.status(200).json({ status: 200, data: userDetails, message: "user.controller -> "});
    } catch(error) {
        return response.status(400).json({ status: 400, message: error.message });
    }
};

exports.signup = async (request, response, next) => {

    // Validation of request params
    try {
        //await passport.authenticate('local');
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