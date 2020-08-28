const TicketService = require('../services/ticket.service');

exports.getTicket = async (request, response, next) => {

    try {
        const ticket = await TicketService.getTicket(request.body.id);
        return response.status(200).json({ status: 200, data: ticket, message: "ticket.controller -> Successfully got ticket from db" });
    } catch(error) {
        return response.status(400).json({ status: 400, message: error.message });
    }
};

exports.createTicket = async (request, response, next) => {

    try {
        const ticket = await TicketService.createTicket(request.body);
        return response.status(200).json({ status: 200, data: ticket, message: "ticket.controller -> Successfully created ticket in db" });
    } catch(error) {
        return response.status(400).json({ status: 400, message: error.message });
    }
};

exports.updateTicket = async (request, response, next) => {

    try {
        const ticket = await TicketService.updateTicket(request.body);
        return response.status(200).json({ status: 200, data: ticket, message: "ticket.controller -> Successfully updated ticket in db" });
    } catch(error) {
        return response.status(400).json({ status: 400, message: error.message });
    }
}

exports.deleteTicket = async (request, response, next) => {

    try {
        await TicketService.deleteTicket(request.body.id);
        return response.status(200).json({ status: 200, message: "ticket.controller -> Successfully deleted ticket in db" });
    } catch(error) {
        return response.status(400).json({ status: 400, message: error.message });
    }
}