const User = require('../models/user.model');
const Roles = require('../utils/roles');
const passport = require('passport');
const jwt = require('jsonwebtoken');

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