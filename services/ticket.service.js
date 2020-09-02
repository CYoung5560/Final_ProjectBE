const Ticket = require('../models/ticket.model');
const Movie = require('../models/movie.model');
const User = require('../models/user.model');
const Concession = require('../models/concession.model');

exports.getTicket = async (id) => {

    try {
        const ticket = await Ticket.findById(id);
        if (!ticket) throw Error('ticket.service.js -> Error finding ticket by id');

        // Conv obj ids to human-readable form
        const readableTicket = {};
        readableTicket._id = ticket._id;
        readableTicket.movie = await Movie.findById(ticket.movieTitle);
        readableTicket.booker = await User.findById(ticket.booker);
        readableTicket.concession = await Concession.findById(ticket.concession);
        
        return readableTicket;
    } catch (error) {
        throw Error(error.message);
    }
};

exports.createTicket = async (userId, ticket) => {

    try {
        ticket.booker = userId;
        
        const movie = Movie.findOne({ title: ticket.movieTitle }).exec();
        await movie.then(async (document) => {
            ticket.movieTitle = document._id;
        }).catch(error => {throw Error(error.message)});

        const concession = Concession.findOne({ concession: ticket.concession }).exec();
        await concession.then(async (document) => {
            ticket.concession = document._id;
        }).catch(error => {throw Error(error.message)});

        console.log(ticket);
        const newTicket = await Ticket.create(ticket);

        const readableTicket = {};
        readableTicket._id = newTicket._id;
        readableTicket.movie = await Movie.findById(newTicket.movieTitle);
        readableTicket.booker = await User.findById(newTicket.booker);
        readableTicket.concession = await Concession.findById(newTicket.concession);
        
        return readableTicket;
    } catch (error) {
        throw Error('ticket.service.js -> Error creating ticket');
    }
};

exports.updateTicket = async (ticket) => {

    try {
        const movie = Movie.findOne({ title: ticket.movieTitle }).exec();
        await movie.then(async (document) => {
            ticket.movieTitle = document._id;
        }).catch(error => {throw Error(error.message)});

        const concession = Concession.findOne({ concession: ticket.concession }).exec();
        await concession.then(async (document) => {
            ticket.concession = document._id;
        }).catch(error => {throw Error(error.message)});

        const updatedTicket = await Ticket.findByIdAndUpdate(ticket.id, ticket);
        
        const readableTicket = {};
        readableTicket._id = updatedTicket._id;
        readableTicket.movie = await Movie.findById(updatedTicket.movieTitle);
        readableTicket.booker = await User.findById(updatedTicket.booker);
        readableTicket.concession = await Concession.findById(updatedTicket.concession);
        
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