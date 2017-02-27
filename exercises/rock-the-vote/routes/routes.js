var express = require("express");
var routes = express.Router();
var Issues = require("../models/issues")


routes.get("/", function (req, res) {

    var query = {}
    if (req.query.title) query.title = req.query.title;
    if (req.query.description) query.description = req.query.description;
    if (req.query.votes) query.votes = req.query.votes;
    if (req.query.comments) query.comments = req.query.comments;

    Issues.find(query, function(err, issues) {
        if (err) return res.status(500).send(err);

        res.send(issues);
    });
});

routes.get("/:id", function (req, res) {
    Issues.findById(req.params.id, function(err, issue) {
        if (err) return res.status(500).send(err)
        res.send(issue)
    });
});

routes.post("/", function (req, res) {

    var issue = new Issues(req.body);

    issue.save(function(err) {
        if(err) return res.status(500).send(err);

        res.status(201).send(issue);
    });


});

routes.put("/:id", function (req, res) {

    Issues.findByIdAndUpdate(req.params.id, req.body, {new:true}, function (err, updatedIssue) {
        if (err) return res.status(500).send(err);

        res.send(updatedIssue);
    });

});

routes.delete("/:id", function (req, res) {

    Issues.findByIdAndRemove(req.params.id, function (err, result) {
        if (err) return res.status(500).send(err);
        res.send({message: "successfully deleted issue", success: true});
        });

});



module.exports = routes