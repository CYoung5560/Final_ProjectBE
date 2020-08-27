const mongoose = require('mongoose');

// Created a MovieSchema with mongoose.
const MovieSchema = new mongoose.Schema({
    // 'title' property is a String.
    title: String
});

// A movie model (object) can have functions.
// These are compiled onto the model prototype (ignore unless your brave ;)) and
// exposed with each instantiated object (can be called like so: 'movieObj.info()').
// Useful for logging db info.
MovieSchema.methods.info = () => {
    console.log(`TITLE -> this.title`);
}

// Compiled schema into a model.
const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;
// SEE FOR MORE ON MONGOOSE 5.10: https://mongoosejs.com/docs/