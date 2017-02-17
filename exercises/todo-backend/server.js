var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var uuid = require("uuid");
var path = require("path");

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")))

var todoList = [
    {
        title: "Buy a house",
        description: "Cuz why not.",
        cost: "lots of money",
        id: "123123"
    },
    {
        title: "second todo",
        description: "yeah..",
        cost: "lots",
        id: "23asdfasdfl3"
    }
]

app.get("/todos", function(req, res) {
    res.send(todoList);
})

app.get("/todos/:id", function(req, res) {
    for (var i = 0; i < todoList.length; i++) {
        if (todoList[i].id === req.params.id) {
            return res.send(todoList[i]);
        }
    }
    res.status(404).send({
        message: "Not Found"
    })
})

app.post("/todos", function(req, res) {
    req.body.id = uuid.v4();
    todoList.push(req.body);
    res.send(todoList);
})

app.put("/todos/:id", function(req, res) {
    for (var i = 0; i < todoList.length; i++){
        if (todoList[i].id === req.params.id) {
            req.body.id = req.params.id;
            todoList[i] = req.body
            return res.send(req.body)
        }
    }
    res.status(404).send({
        message: "Not Found"
    });
})

app.delete("/todos/:id", function (req, res) {
    for (var i = 0; i < todoList.length; i++){
        if (todoList[i].id === req.params.id) {
            todoList.splice([i], 1)
            return res.send("Your To-Do was deleted")
        }
    }
})




app.listen(8000, function (req, res) {
    console.log("This app is listening on port 8000.")
})