var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var uuid = require("uuid");
var path = require("path");
var addThis = require("./middleware")

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,"public")));

app.use(addThis);

var pizza = [
    {
        brand: "pizza hut",
        type: "pepperoni",
        crust: "thin",
    }
];

app.get("/", function(req, res) {
    
    res.send(req.body)
    
    
})






app.listen(8000, function(req, res) {
    console.log("This app is listening on port 8000")
})