const Movie = require('../models/movie.model');

exports.getMovieById = async (id) => {

    try {
        const movie = await Movie.findById(id);
        return movie;
    } catch(error) {
        throw Error('movie.service.js -> Error finding movie by id');
    }
};

exports.createMovie = async (movie) => {
    console.log(movie);
    try {
        const newMovie = await Movie.create({ "title": movie.title, "year": movie.year, "director": movie.director });
        console.log(newMovie);
        return newMovie;
    } catch(error) {
        console.log(error);
        throw Error('movie.service.js -> Error creating movie');
    }
};