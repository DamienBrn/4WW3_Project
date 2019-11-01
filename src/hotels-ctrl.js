const express = require('express');
const hotelRoutes = express.Router();

const Hotel = require('./hotels-model')


//get all hotels
hotelRoutes.route('/hotels').get(function(req, res) {
  Hotel.find(function(err, hotels) {
      if (err) {
          console.log(err);
      } else {
          res.json(hotels);
      }
  });
});

//get hotel by Id
hotelRoutes.route('/hotel/:id').get(function(req, res) {
  let id = req.params.id;
  Hotel.findById(id, function(err, hotel) {
      res.json(hotel);
  });
});

//get hotel by Name
hotelRoutes.route('/hotel/name/:name').get(function(req, res) {
    let name = req.params.name;
    Hotel.find({name}, function(err, hotel) {
        res.json(hotel);
    });
  });

//add new hotel
hotelRoutes.route('/hotel').post(function(req, res) {
  let hotel = new Hotel(req.body);
  console.log(req.body)
  hotel.save()
      .then(hotel => {
          res.status(200).json({'hotel': 'hotel added successfully', 'obj' : req.body});
      })
      .catch(err => {
          res.status(400).send('adding new hotel failed');
      });
});

//update hotel by Id
hotelRoutes.route('/hotel/:id').put(function(req, res) {
  Hotel.findById(req.params.id, function(err, hotel) {
    if (!hotel)
        res.status(404).send("data is not found");
    else{
        hotel.name = req.body.name
        hotel.countryCode = req.body.countryCode
        hotel.city = req.body.city
        hotel.avgRating = req.body.avgRating
        hotel.avgPrice = req.body.avgPrice
        hotel.stars = req.body.stars
    }
      hotel.save().then(hotel => {
              res.json('hotel updated!');
          })
          .catch(err => {
              res.status(400).send("Update not possible");
          });
  });
});


module.exports = hotelRoutes
