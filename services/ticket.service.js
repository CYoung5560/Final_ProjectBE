const Ticket = require('../models/ticket.model');

exports.getTicket = async (id) => {

    try {
        const ticket = await Ticket.findById(id);
        return ticket;
    } catch (error) {
        throw Error('ticket.service.js -> Error finding ticket by id');
    }
};

exports.createTicket = async (ticket) => {

    try {
        const newTicket = await Ticket.create(ticket);
        return newTicket;
    } catch (error) {
        throw Error('ticket.service.js -> Error creating ticket');
    }
};

exports.updateTicket = async (ticket) => {

    try {
        const updatedTicket = await Ticket.findByIdAndUpdate(ticket.id, ticket);
        return updatedTicket;
    } catch (error) {
        throw Error('ticket.service.js -> Error updating ticket');
    }
};

exports.deleteTicket = async (id) => {

    try {
        await Ticket.findByIdAndDelete(id);
    } catch (error) {
        throw Error('ticket.service.js -> Error deleting ticket by id');
    }
};