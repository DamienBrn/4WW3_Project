const mongoose = require('mongoose');
const Schema = mongoose.Schema;

  var hotelSchema = new Schema({
    name : String,
    countryCode : String,
    city : String,
    address : String,
    address2 : String,
    zipCode : String,
    state : String,
    avgRating : Number,
    avgPrice : Number,
    stars : Number,
    lat : Number,
    lng : Number,
    description : String,
    services : Object,
    reviews : Object
  },
  {collection : 'hotel'}
  );


  var Hotel = mongoose.model('Hotel', hotelSchema);

  module.exports = Hotel