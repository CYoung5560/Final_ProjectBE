const UserService = require('../services/user.service');

exports.login = async (request, response, next) => {

    // Validation of request params
    try {
        const { user, token } = UserService.login(request, response);
        return response.status(200).json({ status: 200, success: true, data: { user: user }, message: "user.controller -> login success", token: token });
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