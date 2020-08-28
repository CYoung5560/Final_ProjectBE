const mongoose = require('mongoose'); 

const ticketSchema = new mongoose.Schema({

	concession: {type: String, required: true},
	price: {type: double, required: true}, 

})

ticketSchema.methods.info = () => {
    
	console.log(`CONCESSION -> this.concession`);
	console.log(`PRICE -> this.price`); 
}

const concession = mongoose.model('concession', schema); 
module.exports = concession;