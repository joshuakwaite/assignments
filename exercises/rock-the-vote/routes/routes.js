var express = require("express");
var uuid = require("uuid")

var routes = express.Router();


var issues = [
    {
        title: "Gun Control is Killing America",
        description: "Federal legislation blocking a rule designed to keep guns away from people with mental disabilities is headed to President Donald Trump's desk.",
        votes: 15,
        id: "123123",
        comments: [
            "This guy sucks",
            "I love Trump!",
        ]
    },

    {
        title: "Homeland Security is Important",
        description: "Immigration and Customs Enforcement agents have been conducting what Department of Homeland Security officials describe as a “targeted enforcement surge” and arresting undocumented immigrants for the past week.",
        votes: 16,
        id: "12312333",
        comments: [
            "This guy sucks",
            "I love Trump!",
        ]
    }
]

routes.get("/", function (req, res) {
    res.send(issues)
})

routes.get("/:id", function (req, res) {
    for (var i = 0; i < issues.length; i++) {
        if (issues[i].id === req.params.id) {
            return res.send(issues[i])
        }
    }
    res.status(404).send({
        message: "Not Found"
    })
})

routes.post("/", function (req, res) {
    req.body.id = uuid.v4();
    req.body.votes = 0;
    issues.push(req.body);
    res.send(issues);
})

routes.put("/:id", function (req, res) {
    for (var i = 0; i < issues.length; i++) {
        if (issues[i].id === req.params.id) {
            req.body.id = req.params.id
            issues[i] = req.body
            return res.send(issues[i])
        }
    }
    res.status(404).send({
        message: "Not Found"
    })
})

routes.delete("/:id", function (req, res) {
    for (var i = 0; i < issues.length; i++) {
        if (issues[i].id === req.params.id) {
            issues.splice([i], 1)
            return res.send("Your issue has been deleted.")
        }
    }
    res.status(404).send({
        message: "Not Found"
    })
})



module.exports = routes