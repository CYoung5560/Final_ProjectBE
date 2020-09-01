const mongoose = require('mongoose'); 

const conSchema = new mongoose.Schema({

	concession: {type: String, required: true},
	price: {type: Number, required: true}, 

})

conSchema.methods.info = () => {
    
	console.log(`CONCESSION -> this.concession`);
	console.log(`PRICE -> this.price`); 
}

const concession = mongoose.model('concession', conSchema); 
module.exports = concession;