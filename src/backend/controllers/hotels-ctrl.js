const express = require('express');
const hotelRoutes = express.Router();
const multer = require('multer')

const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, './uploads/')
    },
    filename : function(req, file, cb){
        cb(null, Date.now() + file.originalname)
    } 
})

const fileFilter = (req, file, cb) =>{
    //reject a file
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        //accept a file
        cb(null, true)
    }else{
        cb(null, false)
    }
}

const upload = multer({
    storage : storage, 
    limits:{
        fileSize : 1024 * 1024 * 10 //10MB
    },
    fileFilter : fileFilter
})

const Hotel = require('../models/hotels-model')




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

//get hotels by Name
hotelRoutes.route('/hotels/name/:name').get(function(req, res) {
    let name = req.params.name;
    let regexpName = new RegExp("^"+ name);
    Hotel.find({name : regexpName}, function(err, hotel) {
        res.json(hotel);
    });
  });



//search hotels with payload
hotelRoutes.route('/hotels/payload/:stars/:priceRange').get(function(req, res) {
    let priceRange = req.params.priceRange.split(',').map(function(item) {
        return parseInt(item, 10);
    });

    Hotel.find({stars : req.params.stars, avgPrice : {$gte : priceRange[0]}, avgPrice : {$lte : priceRange[1]} }, function(err, hotels) {
        res.json(hotels);
    });
  });


//add new hotel
hotelRoutes.route('/hotel').post(upload.single('frontPic'), function(req, res, next) {
  let hotel = new Hotel(
      {
        name : req.body.name,
        countryCode : req.body.countryCode,
        city : req.body.city,
        address : req.body.address,
        address2 : req.body.address2,
        zipCode : req.body.zipCode,
        state : req.body.state,
        avgRating : req.body.avgRating,
        avgPrice : req.body.avgPrice,
        stars : req.body.stars,
        lat : req.body.lat,
        lng : req.body.lng,
        description : req.body.description,
        services : req.body.services,
        reviews : req.body.reviews,
        nbOfRooms : req.body.nbOfRooms,
        frontPic : req.file.path 
      }
      );
  hotel.save()
      .then(hotel => {
          res.status(200).json({'hotel': 'hotel added successfully'
    });
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
        hotel.address = req.body.address
        hotel.address2 = req.body.address2
        hotel.zipCode = req.body.zipCode
        hotel.state = req.body.state
        hotel.avgRating = req.body.avgRating
        hotel.avgPrice = req.body.avgPrice
        hotel.stars = req.body.stars
        hotel.lat = req.body.lat
        hotel.lng = req.body.lng
        hotel.description = req.body.description
        hotel.services = req.body.services
        hotel.reviews = req.body.reviews
        hotel.nbOfRooms = req.body.nbOfRooms
    }
      hotel.save().then(hotel => {
              res.json('hotel updated!');
          })
          .catch(err => {
              res.status(400).send("Update not possible");
          });
  });
});

//delete hotel by Id
hotelRoutes.route('/hotel/delete/:id').put(function(req, res) {
    let id = req.params.id;
    Hotel.deleteOne({ _id: id }, function(err) {
        if (!err) {
                res.json('Hotel successfully deleted')
        }
        else {
            res.json('Error while trying to delete hotel')
        }
    });
  });



module.exports = hotelRoutes
