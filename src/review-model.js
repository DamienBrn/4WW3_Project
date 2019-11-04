const mongoose = require('mongoose');
const Schema = mongoose.Schema;

  var reviewSchema = new Schema({
    userId : String,
    hotelId : String,
    title : String,
    description: String,
    rating : Number
  },
  {collection : 'review'}
  );


  var Review = mongoose.model('Review', reviewSchema);

  module.exports = Review