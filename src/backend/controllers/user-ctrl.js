const express = require('express');
const userRoutes = express.Router();

const User = require('../models/user-model')


//get all users
userRoutes.route('/users').get(function(req, res) {
  User.find(function(err, users) {
      if (err) {
          console.log(err);
      } else {
          res.json(users);
      }
  });
});


//get user by Id
userRoutes.route('/user/:id').get(function(req, res) {
  let id = req.params.id;
  User.findById(id, function(err, user) {
      res.json(user);
  });
});


//get user by email
userRoutes.route('/user/email/:email').get(function(req, res) {
    let email = req.params.email;
    User.findOne({email}, function(err, user) {
        res.json(user);
    });
  });


//add new user
userRoutes.route('/user').post(function(req, res) {
  let user = new User(req.body);
    user.save()
      .then(user => {
          res.status(200).json({'user': 'user added successfully', 'obj' : req.body});
      })
      .catch(err => {
          res.status(400).send('adding new user failed');
      });
});

//update user by Id
userRoutes.route('/user/:id').put(function(req, res) {
    User.findById(req.params.id, function(err, user) {
    if (!user)
        res.status(404).send("data is not found");
    else{
        user.name = req.body.name
        user.email = req.body.email
        user.firstName = req.body.firstName
        user.lastName = req.body.lastName
        user.countryCode = req.body.countryCode
        user.birthdate = req.body.birthdate
    }
    user.save().then(user => {
              res.json('user updated!');
          })
          .catch(err => {
              res.status(400).send("Update not possible");
          });
  });
});


module.exports = userRoutes
