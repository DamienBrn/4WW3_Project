const express = require('express')

const HotelCtrl = require('./hotels-ctrl')

const router = express.Router()

/*router.post('/hotel', HotelCtrl.createMovie)
router.put('/hotel/:id', HotelCtrl.updateMovie)
router.get('/hotel/:id', HotelCtrl.getMovieById)*/
router.get('/hotels', HotelCtrl.getHotels)

module.exports = router