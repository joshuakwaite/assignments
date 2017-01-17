var readline = require("readline-sync");


var name = readline.question("Hello \nWhat is your name? ");
console.log(name.toUpperCase() + " - that's a good name. \nMy name is Jarvis. It is nice to meet you.");
var age = readline.question("What is your age? ");
console.log(age.concat(name))
var color = readline.question("What is your favorite color? ");
console.log(color.length);
var food = readline.question("What is your favorite food? ");
var longMessage = readline.question("Type a long message here: ");
console.log("Wow, that was a long message. Here is the first half of your message.\n" + longMessage.substr(0,(longMessage.length / 2)))
var startFrom = readline.question("Where would you like me to start from? ")
startFrom = parseInt(startFrom);
console.log(longMessage.substr(startFrom,longMessage.length));
