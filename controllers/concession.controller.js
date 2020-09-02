const ConcessionService = require('../services/concession.service');

exports.create = async (request, response, next) => {

    try {
        const concession = await ConcessionService.create(request.body);
        return response.status(200).json({ status: 200, data: concession, message: "concession.controller -> Successfully created concession"});
    } catch(error) {
        return response.status(400).json({ status: 400, message: error.message });
    }
};