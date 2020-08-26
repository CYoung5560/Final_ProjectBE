const express = require('express');
const movieRoutes = require('./routes/movie.route');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user.model');
const userRoutes = require('./routes/user.route');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8000;

// Use in-built Express json parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use(session({
    name: 'session-id',
    secret: '382723huh9',
    saveUninitialized: false,
    resave: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Handles routes starting with '/movie'
app.use('/movie', movieRoutes);
app.use(userRoutes);

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