var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var uuid = require("uuid");
var path = require("path");
var mongoose = require("mongoose")
var Schema = mongoose.Schema;
var bountyRoutes = express.Router()

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")))

// var bounties = [
//     {
//         firstname: "Jabba",
//         lastname: "Hutt",
//         living: true,
//         bountyAmount: 1000,
//         type: "Sith",
//         id: "1234abcd",
//     }
// ];

var BountySchema = new Schema({
    firstName: String,
    lastName: String,
    living: Boolean,
    bountyAmount: Number,
    type: String,
})

var Bounty = mongoose.model("Bounty", BountySchema);


app.get('/bounties', function (req, res) {
    Bounty.find({}, function(err, data) {
        if (err) return res.status(500).send(err);
        res.send(data);
    })

})

app.get('/bounties/:bountyId', function (req, res) {
    Bounty.findById(req.params.id, function(err, bounty){
        if (err) return res.status(500).send(err);
        res.send(bounty)
    })
})

app.post('/bounties', function (req, res) {
    var bounty = new Bounty(req.body);
    bounty.save(function(err){
        if(err) return res.status(500).send(err);
        res.status(201).send(bounty)
    })
})

app.put('/bounties/:bountyId', function (req, res) {
    Bounty.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, updatedBounty) {
        if (err) return res.status(500).send(err);
        res.send(updatedBounty);
    });
})

app.delete('/bounties/:bountyId', function (req, res) {
    Bounty.findByIdAndRemove(req.params.id, function (err, bounty) {
        if (err) return res.status(500).send(err);
        res.send({message: "Successfully deleted bounty", success: true});
    });

})

mongoose.connect("mongodb://localhost/bounties", function (err) {
    if (err) {
        throw err;
    }
    console.log("connected to the database!")
});

app.listen(8000, function (req, res) {
    console.log("The app is listening on port 8000!")
})