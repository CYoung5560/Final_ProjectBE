const mongoose = require('mongoose'); 

const ticketSchema = new mongoose.Schema({

	movieTitle: {type: mongoose.Types.ObjectId, ref: 'movie'},
	screening: {type: mongoose.Types.ObjectId, ref: 'times'}, 
	booker: {type: mongoose.Types.ObjectId, ref: 'user'},
	concession: {type: mongoose.Types.ObjectId, ref: 'concession'},
<<<<<<< HEAD
	
})
=======

});
>>>>>>> bdc216ba428f939bf2b897f7d6b6c67de22a262d

ticketSchema.methods.info = () => {
    console.log(`TITLE -> this.movieTitle`);
	console.log(`SCREENING -> this.screening`);
	console.log(`BOOKER -> this.booker`);
	console.log(`CONCESSION -> this.concession`);
<<<<<<< HEAD
}
=======
	console.log(`MINUTE -> this.minute`); 
};
>>>>>>> bdc216ba428f939bf2b897f7d6b6c67de22a262d

const tickets = mongoose.model('times', ticketSchema); 
module.exports = tickets;
