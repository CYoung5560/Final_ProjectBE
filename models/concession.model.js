<<<<<<< HEAD
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
=======
const mongoose = require('mongoose');

const concessionSchema = new mongoose.Schema({

    concession: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

concessionSchema.methods.info = () => {

    console.log(`CONCESSION -> ${this.concession}`);
    console.log(`PRICE -> ${this.price}`);
};

const Concession = mongoose.model('concession', concessionSchema);
module.exports = Concession;
>>>>>>> bdc216ba428f939bf2b897f7d6b6c67de22a262d
