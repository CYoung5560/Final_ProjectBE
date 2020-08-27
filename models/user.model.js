const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const { PassportLocalSchema } = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  }
});

UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', UserSchema, 'User');

module.exports = User;