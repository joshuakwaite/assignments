var express = require("express");
var app = express();
var path = require("path");
var port = process.env.PORT || 8000
var bodyParser = require("body-parser")
var uuid = require("uuid")
var mongoose = require("mongoose")


app.use(express.static(path.join(__dirname, "public")))

app.use(bodyParser.json())

app.use('/issues', require("./routes/routes"));

mongoose.connect("mongodb://localhost/politicalposts", function (err) {
    if (err) {
        throw err;
    }
    console.log("Connected to the database!")
});


app.listen(port, function(req, res) {
    console.log("This app is listening on port 8000.")
})