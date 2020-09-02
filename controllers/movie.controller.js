const MovieService = require('../services/movie.service');
const { json } = require('body-parser');

exports.getMovieById = async (request, response, next) => {

    // Validation of request params
    try {
        // Pass control to MovieService
        const movie = await MovieService.getMovieById(request.params.id);
        return response.status(200).json({ status: 200, data: movie, message: "movie.controller -> Successfully retrieved movie by id"});
    } catch(error) {
        return response.status(400).json({ status: 400, message: error.message });
    }
};

exports.getMovieByTitle = async (request, response, next) => {
    // Validation of request params
    try {
        // Pass control to MovieService
        const movie = await MovieService.getMovieByTitle(request.params.title);
        return response.status(200).json({ status: 200, data: movie, message: "movie.controller -> Successfully retrieved movie by id"});
    } catch(error) {
        return response.status(400).json({ status: 400, message: error.message });
    }
};

exports.createMovie = async (request, response, next) => {

    try {
        const movie = await MovieService.createMovie(request.body);
        return response.status(200).json({ status: 200, data: movie, message: "movie.controller -> Successfully created movie in db" });
    } catch(error) {
        return response.status(400).json({ status: 400, message: error.message });
    }
};

exports.deleteMovie = async (request, response, next) => {
    try{
        const movie = await MovieService.deleteMovie(request.body)
        return response.status(200).json({status: 200, data: movie, message: "movie.controller -> Successfully deleted entry"})
    } catch(error) {
        return response.status(400).json({status:400, message: error.message});
    }
}

exports.updateMovie = async (request, response, next) => {
    try{
        const movie = await MovieService.deleteMovie(request.body)
        return response.status(200).json({status: 200, data: movie, message: "movie.controller -> Successfully updated entry"})
    } catch(error) {
        return response.status(400).json({status: 400, message: error.message});
    }
}