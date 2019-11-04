const mongoose = require('mongoose');
const Schema = mongoose.Schema;

  var userSchema = new Schema({
    email : String,
    password : String,
    firstName : String,
    lastName : String,
    countryCode : String,
    birthdate : String
  },
  {collection : 'user'}
  );


  var User = mongoose.model('User', userSchema);

  module.exports = User