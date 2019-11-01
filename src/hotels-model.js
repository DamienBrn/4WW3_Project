const mongoose = require('mongoose');
const Schema = mongoose.Schema;

  var hotelSchema = new Schema({
    name : String,
    countryCode : String,
    city : String,
    avgRating : Number,
    avgPrice : Number,
    stars : Number
  },
  {collection : 'hotel'}
  );


  var Hotel = mongoose.model('Hotel', hotelSchema);

  module.exports = Hotel