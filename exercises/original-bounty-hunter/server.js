var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var uuid = require("uuid");
var path = require("path");

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")))

var bounties = [
    {
        firstname: "Jabba",
        lastname: "Hutt",
        living: true,
        bountyAmount: 1000,
        type: "Sith",
        id: "1234abcd",
    }
];



app.get('/bounties', function (req, res) {
    res.send(bounties);
})

app.get('/bounties/:bountyId', function (req, res) {
    for (var i = 0; i < bounties.length; i++) {
        if (bounties[i].id === req.params.bountyId) {
            return res.send(bounties[i])
        }
        
    }
    res.status(404).send({
        message: "Not Found"
    });
})

app.post('/bounties', function (req, res) {
    var newBounty = req.body
    newBounty.id = uuid.v4();
    bounties.push(newBounty);
    res.send(bounties);
})

app.put('/bounties/:bountyId', function (req, res) {
    for (var i = 0; i < bounties.length; i++) {
        if (bounties[i].id === req.params.bountyId) {
            req.body.id = uuid.v4();
            bounties[i] = req.body
            return res.send(req.body)
        }
    }
    res.status(404).send({
        message: "Not Found"
    });
})

app.delete('/bounties/:bountyId', function (req, res) {
    for (var i = 0; i < bounties.length; i++) {
        if (bounties[i].id === req.params.bountyId) {
            bounties.splice([i], 1)
            return res.send("Your object with the id of: " + req.params.bountyId + " was deleted.")
        }
    }
    res.status(404).send({
        message: "Not Found"
    });

})

app.listen(8000, function (req, res) {
    console.log("The app is listening on port 8000!")
})