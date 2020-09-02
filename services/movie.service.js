const Movie = require('../models/movie.model');

exports.getMovieById = async (id) => {
    try {
        const movie = await Movie.findById(id);
        return movie;
    } catch(error) {
        throw Error('movie.service.js -> Error finding movie by id');
    }
};

exports.getMovieByTitle = async (title) => {
    try {
        const movie = await Movie.findByOne({title: title});
        return movie;
    } catch(error) {
        throw Error('movie.service.js -> Error finding movie by title');
    }
};

exports.createMovie = async (movie) => {
    console.log(movie);
    try {
        const newMovie = await Movie.create({ "title": movie.title, "year": movie.year, "description": movie.description, 
        "actors": movie.actors, "director": movie.director, "imdb": movie.imdb});
        console.log(newMovie);
        return newMovie;
    } catch(error) {
        console.log(error);
        throw Error('movie.service.js -> Error creating movie');
    }
};

exports.deleteMovie = async (id) => {
        try {
            const movie = await Movie.findByIdAndDelete(id); 
        } catch(error) {
            console.log(error);
            throw Error('movie.service.js -> Error deleting movie');
        }
};

exports.updateMovie = async (id, movie) => {
    try {
        const movie = await Movie.findByIdAndUpdate(id, { "title": movie.title, "year": movie.year, "description": movie.description, 
        "actors": movie.actors, "director": movie.director, "imdb": movie.imdb});
    } catch(error) {
        console.log(error);
        throw Error('movie.service.js -> Error updating movie');
    }
}
