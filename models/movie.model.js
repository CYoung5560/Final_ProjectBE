const mongoose = require('mongoose');

// Created a MovieSchema with mongoose.
const schema = new mongoose.Schema({

    title: {type: String, required: true},
    year: {required: true},
    description: {type: String},
    actors: {type: String},
    director: {type: String, required: true},
    showingTimes: {type: mongoose.Types.ObjectId, ref: 'times'}
});

// A movie model (object) can have functions.
// These are compiled onto the model prototype (ignore unless your brave ;)) and
// exposed with each instantiated object (can be called like so: 'movieObj.info()').
// Useful for logging db info.
MovieSchema.methods.info = () => {
    console.log(`TITLE -> this.title`);
	console.log(`YEAR -> this.year`);
	console.log(`DESC -> this.description`); 
	console.log(`ACTORS -> this.actors`); 
	console.log(`DIRECTOR -> this.director`); 
	console.log(`TIMES -> this.showingTimes`); 
}

// Compiled schema into a model.
const Movie = mongoose.model('Movie', schema);
module.export = Movie; 

// SEE FOR MORE ON MONGOOSE 5.10: https://mongoosejs.com/docs/