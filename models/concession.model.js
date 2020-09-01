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