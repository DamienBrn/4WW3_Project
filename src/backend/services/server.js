const express = require('express')
const app = express();

//-----------------Import route controllers------------------------------
const hotelRoutes = require('../controllers/hotels-ctrl')
const userRoutes = require ('../controllers/user-ctrl')
const reviewRoutes = require ('../controllers/review-ctrl')

//----------------------Initiate imports for the server------------------
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = 4000;
const url = 'mongodb://localhost:27017/mcmaster'
const path = require("path");

app.use('/uploads', express.static('uploads'))
app.use(cors());
app.use(bodyParser.json());
mongoose.connect(url, { useNewUrlParser: true })


//-----------------Connect to DB--------------------------------------
const db = mongoose.connection

db.once('open', function() {
    console.log("MongoDB database connection established successfully")
})

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT)
});



/*--ROUTES SETUP-*/
app.use('/api', hotelRoutes)
app.use('/api', userRoutes)
app.use('/api', reviewRoutes)


app.use(express.static("project_1/build"));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "project_1", "build", "index.html"));
});