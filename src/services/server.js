const express = require('express');
const app = express();
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


/*Query tests*/

var Schema = mongoose.Schema;

  var hotelSchema = new Schema({
    name:  String,
    country: String,
  },
  {collection : 'hotel'}
  );


  var Hotel = mongoose.model('Hotel', hotelSchema);

/**/ 

let query = { country : 'ch'};

Hotel.findOne(query, 'name' ,function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });