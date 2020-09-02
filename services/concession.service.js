const Concession = require('../models/concession.model');

exports.create = async (concession) => {

    try {
        const con = await Concession.create(concession);
        return con;
    } catch(error) {
        throw Error('concession.service.js -> Error creating concession');
    }
};