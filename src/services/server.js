const express = require('express');
const app = express();
const hotelRoutes = require('../hotels-ctrl')
const userRoutes = require ('../user-ctrl')
const reviewRoutes = require ('../review-ctrl')
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const url = 'mongodb://localhost:27017/mcmaster'



app.use(cors());
app.use(bodyParser.json());
mongoose.connect(url, { useNewUrlParser: true });

const db = mongoose.connection;

db.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

/*--ROUTES SETUP-*/
app.use('/api', hotelRoutes);
app.use('/api', userRoutes);
app.use('/api', reviewRoutes);