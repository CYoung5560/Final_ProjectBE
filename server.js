const express = require('express');
const movieRoutes = require('./routes/movie');

const app = express();
const port = process.env.PORT || 8000;

// Handles routes starting with '/movie'
app.use('/movie', movieRoutes);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});