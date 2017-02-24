var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser")

var mongoose = require("mongoose");

var port = process.env.PORT || 8000

app.use(express.static(path.join(__dirname, "public")))

app.use(bodyParser.json())

mongoose.connect("mongodb://localhost/racecars", function(err) {
    if (err) {
        throw err;
    }
    console.log("Connected to the database.")
})

var racecarSchema = new mongoose.Schema({
    name: String,
    make: {
        type: String,
        required: true
    },
    model: String,
    color: String,
    year: Number,
    streetLegal: Boolean,
    sponsorStickers: [String]
})

var RaceCar = mongoose.model("RaceCar", racecarSchema)

var joshsCar = new RaceCar({make: "Porche"});

joshsCar.save();

app.listen(port, function(req, res) {
    console.log("This app is listening on port 8000.")
})