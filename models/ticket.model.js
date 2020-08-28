const mongoose = require('mongoose'); 

const ticketSchema = new mongoose.Schema({

	movieTitle: {type: mongoose.Types.ObjectId, ref: 'movie'},
	screening: {type: mongoose.Types.ObjectId, ref: 'times'},
	booker: {type: mongoose.Types.ObjectId, ref: 'User'},
	concession: {type: mongoose.Types.ObjectId, ref: 'concession'}
});

ticketSchema.methods.info = () => {
    console.log(`TITLE -> this.movieTitle`);
	console.log(`SCREENING -> this.screening`);
	console.log(`BOOKER -> this.booker`);
	console.log(`CONCESSION -> this.concession`);
	console.log(`MINUTE -> this.minute`); 
};

const tickets = mongoose.model('times', ticketSchema); 
module.exports = tickets;