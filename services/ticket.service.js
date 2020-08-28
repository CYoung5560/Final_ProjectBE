const Ticket = require('../models/ticket.model');
const Movie = require('../models/movie.model');
const User = require('../models/user.model');

exports.getTicket = async (id) => {

    try {
        const ticket = await Ticket.findById(id);
        if (!ticket) throw Error('ticket.service.js -> Error finding ticket by id');

        // Conv obj ids to human-readable form
        const readableTicket = {};
        readableTicket.movie = await Movie.findById(ticket.movieTitle);
        readableTicket.booker = await User.findById(ticket.booker);
        
        return readableTicket;
    } catch (error) {
        throw Error(error.message);
    }
};

exports.createTicket = async (userId, ticket) => {

    try {
        ticket.booker = userId;
        const newTicket = await Ticket.create(ticket);

        const readableTicket = {};
        readableTicket.movie = await Movie.findById(newTicket.movieTitle);
        readableTicket.booker = await User.findById(newTicket.booker);
        
        return readableTicket;
    } catch (error) {
        throw Error('ticket.service.js -> Error creating ticket');
    }
};

exports.updateTicket = async (ticket) => {

    try {
        const updatedTicket = await Ticket.findByIdAndUpdate(ticket.id, ticket);
        
        
        const readableTicket = {};
        readableTicket.movie = await Movie.findById(updatedTicket.movieTitle);
        readableTicket.booker = await User.findById(updatedTicket.booker);
        
        return readableTicket;
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