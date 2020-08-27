const Movie = require('../models/movie.model');

exports.getMovieById = async (id) => {

    try {
        const movie = await Movie.findById(id);
        return movie;
    } catch(error) {
        throw Error('movie.service.js -> Error finding movie by id');
    }
};

exports.createMovie = async (title) => {

    try {
        const movie = await Movie.create({ title: title });
        return movie;
    } catch(error) {
        throw Error('movie.service.js -> Error creating movie');
    }
};