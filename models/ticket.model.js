const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const ticketSchema = new mongoose.Schema({

	movieTitle: {type: mongoose.Types.ObjectId, ref: 'movie'},
	screening: {type: mongoose.Types.ObjectId, ref: 'times'},
	booker: {type: mongoose.Types.ObjectId, ref: 'user'},
	concession: {type: mongoose.Types.ObjectId, ref: 'concession'},
	transId: {type: String, unique: true}

});

ticketSchema.methods.info = () => {
    console.log(`TITLE -> ${this.movieTitle}`);
	console.log(`SCREENING -> ${this.screening}`);
	console.log(`BOOKER -> ${this.booker}`);
	console.log(`CONCESSION -> ${this.concession}`);
};

ticketSchema.plugin(uniqueValidator);

const tickets = mongoose.model('times', ticketSchema); 
module.exports = tickets;
