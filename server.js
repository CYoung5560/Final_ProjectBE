const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8000;

const User = require('./models/user.model');

const userRoutes = require('./routes/user.route');
const movieRoutes = require('./routes/movie.route');
const ticketRoutes = require('./routes/ticket.route');
const paymentRoutes = require('./routes/payment.route');
const concessionRoutes = require('./routes/concession.route');

// Use in-built Express json parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(session({
    name: 'session-id',
    secret: '382723huh9',
    saveUninitialized: false,
    resave: false
}));

app.use(passport.initialize());

passport.use(new LocalStrategy(User.authenticate()));
passport.use(new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: 'key3892'
    }, (jwtPayload, callback) => {
    return User.findById(jwtPayload.userId)
        .then(user => {
            return callback(null, user);
        })
        .catch(error => {
            return callback(error);
        });
}));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Handles routes starting with '/movie'
app.use('/ticket', ticketRoutes);
app.use('/movie', movieRoutes);
app.use('/concession', concessionRoutes);
app.use(userRoutes);
app.use(paymentRoutes);

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