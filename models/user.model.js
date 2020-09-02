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

userSchema.methods.info =() => {
  console.log(`User -> ${username}`);
  console.log(`Role -> ${role}`);
}

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema, 'User');

module.exports = User;