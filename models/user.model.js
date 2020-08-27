const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  role: String
});

<<<<<<< HEAD
const userSchema = new mongoose.Schema({
=======
userSchema.plugin(passportLocalMongoose);
>>>>>>> 8e1e7f4450e2c72a98f5d9021d7ec63b260cb5f6

const User = mongoose.model('User', userSchema, 'User');

module.exports = User;