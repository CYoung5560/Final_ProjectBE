const UserService = require('../services/user.service');
const passport = require('passport');
const jwt = require('jsonwebtoken');

exports.login = async (request, response, next) => {

    // Validation of request params
    try {
        await passport.authenticate('local', { session: false }, (error, user, info) => {
            console.log(user);
            console.log(error);
            if (error) {
                return next(error);
            }

            if (!user) {
                return next(error);
            }

            request.logIn(user, { session: false }, (error) => {
                if (error) {
                    return next(error);
                }
                const token = jwt.sign({ userId: user._id, username: user.username }, 'key3892', { expiresIn: '24h' });
                console.log(token);
                // return { user, token };
                return response.status(200).json({ status: 200, success: true, data: { user: user }, message: "user.controller -> login success", token: token });
            });
        })(request, response, next);  // 
    } catch (error) {
        return response.status(400).json({ status: 400, message: error.message });
    }
};

exports.signup = async (request, response, next) => {

    // Validation of request params
    try {
        const { username, password } = request.body;
        const newUser = await UserService.signup(username, password);
        return response.status(200).json({ status: 200, data: newUser, message: "user.controller -> " });
    } catch (error) {
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
        return response.status(200).json({ status: 200, message: "user.controller -> " });
    } catch (error) {
        return response.status(400).json({ status: 400, message: error.message });
    }
};