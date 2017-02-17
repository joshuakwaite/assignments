var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var uuid = require("uuid");
var path = require("path");

var socks = [
    {
        brand: "hanes",
        color: "black",
        material: "wool",
        size: "10"
    },
    {
        brand: "underarmour",
        color: "orange",
        material: "cotton",
        size: "3"
    },
    {
        brand: "nike",
        color: "grey",
        material: "poly",
        size: "8"
    }
];

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")))

app.get("/socks", function (req, res) {
    for (var i = 0; i < socks.length; i++) {
        for (var key in req.query) {
            if (req.query[key] === socks[i][key]) {
                return res.send(socks[i])
            }
        }
    }
    res.send("That item doesn't exist.")
})









app.listen(8000, function (req, res) {
    console.log("The app is listening on port 8000")
})







//app.use(addDinos);
//    
//app.get("/", function ( req, res) {
//    console.log(req.dinasour);
//    res.send("yay for dinasours")
//})