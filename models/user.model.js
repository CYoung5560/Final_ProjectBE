const mongoose = require('mongoose');

//package that checks for unique elements in the DB, run the following CMD in terminal
//npm install mongoose-unique-validator
const mongooseUni = require('mongoose-unique-validator');

const schema = new mongoose.Schema({

    firstName: {type: String, required: true}, 
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},

})

schema.plugin(mongooseUni); //calls validator 

userSchema.methods.info = () => {
    console.log(`FIRSTNAME -> this.firstName`);
	console.log(`LASTNAME -> this.lastName`);
	console.log(`EMAIL -> this.email`);
}

const user = mongoose.model('user', schema);
module.export = user; 
