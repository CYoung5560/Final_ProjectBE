const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({

    //gridfs image storage 
    title: {type: String, required: true},
    year: {type: Number, required: true},
    description: {type: String},
    actors: {type: String},
    director: {type: String, required: true},
    showingTimes: [{type: mongoose.Types.ObjectId, ref: 'times'}],
    imdb: {type: String}, 
});

// A movie model (object) can have functions.
// These are compiled onto the model prototype (ignore unless your brave ;)) and
// exposed with each instantiated object (can be called like so: 'movieObj.info()').
// Useful for logging db info.
movieSchema.methods.info = () => {
    console.log(`TITLE -> ${this.title}`);
	console.log(`YEAR -> ${this.year}`);
	console.log(`DESC -> ${this.description}`); 
	console.log(`ACTORS -> ${this.actors}`); 
	console.log(`DIRECTOR -> ${this.director}`); 
    console.log(`TIMES -> ${this.showingTimes}`); 
    console.log(`IMDB -> ${this.imdb}`)
}

// Compiled schema into a model.
const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;

// SEE FOR MORE ON MONGOOSE 5.10: https://mongoosejs.com/docs/
