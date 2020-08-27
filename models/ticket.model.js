const mongoose = require('mongoose'); 

const ticketSchema = new mongoose.Schema({

	movieTitle: {type: mongoose.Types.ObjectId, ref: 'movie'};
	screening: {type: mongoose.Types.ObjectId, ref: 'times'}; 
	booker: {type: mongoose.Types.ObjectId, ref: 'user'};
	concession: {type: mongoose.Types.ObjectId, ref: 'concession'};
    

})

ticketSchema.methods.info = () => {
    console.log(`Title -> this.movieTitle`);
	console.log(`Screening -> this.screening`);
	console.log(`Booker -> this.booker`);
	console.log(`Concession -> this.concession`);
	console.log(`MIN -> this.minute`); 
}

const tickets = mongoose.model('times', schema); 
module.export = tickets;