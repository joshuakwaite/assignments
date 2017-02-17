var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser")
var uuid = require("uuid")

var port = process.env.PORT || 8000

app.use(express.static(path.join(__dirname, "public")))

app.use(bodyParser.json())

app.use('/issues', require("./routes/routes"));

app.listen(port, function(req, res) {
    console.log("This app is listening on port 8000.")
})