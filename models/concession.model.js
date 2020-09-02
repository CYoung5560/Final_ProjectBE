const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const concessionSchema = new mongoose.Schema({

    concession: {
        type: String,
        required: true,
        unique: true
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

concessionSchema.plugin(uniqueValidator);

const Concession = mongoose.model('concession', concessionSchema);
module.exports = Concession;
