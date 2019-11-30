const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    minlength: [2, 'Username must be at least 2 characters.'],
    maxlength: [20, 'Username must be less than 20 characters.'],
    required: [true, 'Your username cannot be blank.'],
  },
  avatar: {
    type: String,
    match: /^(https?:\/\/)(www\.)?(([\w]{2,}([.-]+\w+)*\.[A-Za-z]{2,3})?|(\d{1,3}[.]\d{1,3}[.]\d{1,3}[.]\d{1,3})?)?(:[\d]{1,5})?(\/([\w#!:.?+=&%@!\-/])*)?$/,
    required: true,
  },
});

module.exports = mongoose.model('user', userSchema);
