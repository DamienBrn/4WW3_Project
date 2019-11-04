const express = require('express');
const reviewRoutes = express.Router();

const Review = require('./review-model')


//get all reviews
reviewRoutes.route('/reviews').get(function(req, res) {
    Review.find(function(err, reviews) {
      if (err) {
          console.log(err);
      } else {
          res.json(reviews);
      }
  });
});

//get review by Id
reviewRoutes.route('/review/:id').get(function(req, res) {
  let id = req.params.id;
  Review.findById(id, function(err, review) {
      res.json(review);
  });
});

//get review by hotelId
reviewRoutes.route('/review/hotel/:id').get(function(req, res) {
    let hotelId = req.params.id;
    Review.find({hotelId}, function(err, reviews) {
        res.json(reviews);
    });
  });

//add new review
reviewRoutes.route('/review').post(function(req, res) {
  let review = new Review(req.body);
  console.log(req.body)
  review.save()
      .then(review => {
          res.status(200).json({'review': 'review added successfully', 'obj' : req.body});
      })
      .catch(err => {
          res.status(400).send('adding new review failed');
      });
});

//update review by Id
reviewRoutes.route('/review/:id').put(function(req, res) {
  Review.findById(req.params.id, function(err, review) {
    if (!review)
        res.status(404).send("data is not found");
    else{
        review.userId = req.body.userId
        review.hotelId = req.body.hotelId
        review.title = req.body.title
        review.description = req.body.description
        review.rating = req.body.rating
    }
      review.save().then(review => {
              res.json('review updated!');
          })
          .catch(err => {
              res.status(400).send("Update not possible");
          });
  });
});


module.exports = reviewRoutes
