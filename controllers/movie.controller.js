const MovieService = require('../services/movie.service');

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

exports.createMovie = async (request, response, next) => {

    try {
        const movie = await MovieService.createMovie(request.body);
        return response.status(200).json({ status: 200, data: movie, message: "movie.controller -> Successfully created movie in db" });
    } catch(error) {
        return response.status(400).json({ status: 400, message: error.message });
    }
};