const User = require('../models/user.model');

exports.login = async (request, response) => {

    try {
        user = User.findOne({
            username: request.body.username
        });
        userDetails = {
            username: request.body.username
        };
        return userDetails;
    } catch(error) {
        throw Error('user.service.js -> ');
    }
};

exports.signup = async (username, password) => {

    const newUser = {
        username: username,
    };

    try {
        //if (User.findOne({ username: username })) throw Error(`Username ${username} already exists`);
        console.log(newUser);
        const savedUser = await User.register(newUser, password);
        console.log(savedUser);
        return savedUser;
    } catch(error) {
        throw Error('user.service.js -> ');
    }
};