var readline = require("readline-sync");
var battleship = require("./module");


var grid = []
var maxRow = 10
var maxCol = 10

for (var i = 0; i < maxRow; i++) {
    var newArr = [];
    for (var j = 0; j < maxCol; j++) {
        newArr.push(new battleship.Location())
    }
    grid.push(newArr);
}

var wincount = 0

while (wincount < 3) {


    console.log("Enter your coordinates here")

    var coordinateOne = readline.prompt("")
    var coordinateTwo = readline.prompt("")



    if (grid[0][coordinateOne, coordinateTwo].isShip === true) {
        if(grid[0][coordinateOne, coordinateTwo].hit !== true){
        console.log("You hit the enemy ship!")
        grid[0][coordinateOne, coordinateTwo].hit = true
        grid[0][coordinateOne, coordinateTwo].display = "X"
        wincount += 1
        } else {
            console.log("You already hit this ship! Guess again.")
        }
    } else {
        console.log("Sorry, you missed")
        grid[0][coordinateOne, coordinateTwo].display = "M"
        grid[0][coordinateOne, coordinateTwo].hit = false
    }



}

console.log("Congrats, you won!")