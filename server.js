const express = require('express');
const movieRoutes = require('./routes/movie.route');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 8000;

// Handles routes starting with '/movie'
app.use('/movie', movieRoutes);

// Use in-built Express json parser
app.use(express.json());

// Configure db
const db = 'mongodb://localhost:27017/movie-site';

// Connect to Mongo with mongoose
mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
            autoIndex: false, // Don't build indexes
            poolSize: 10, // Maintain up to 10 socket connections
            serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
            family: 4 // Use IPv4, skip trying IPv6
         })
        .then(() => console.log(`Connected to db on port 27017`))
        .catch((error) => console.log(error));

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});