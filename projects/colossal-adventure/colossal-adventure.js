var readline = require("readline-sync");

var menu = ["Access Inventory", "Continue Walking", "Quit"]
var inventory = ["Healing Potion", "Throwing Knife", ]
var randomEnemy = ["Werewolf", "Vampire Underling", "Imp", "Ghoul", "Zombie", "Ghost"]
var randomFriend = ["Pixie", "Faerie"]
var userHealth = 100
var help = ("Walk - Push 'W' to walk\n")
var quit = true

console.log("\nWELCOME TO BRAN CASTLE, HOME OF COUNT DRACULA\n\nPress enter to begin playing. Press control C at any time to quit.");

readline.prompt();
var userName = readline.question("\nMuahaha.. Good luck, you will need it.\n\nWhat is your name traveler? ")
console.log("\nGreetings, " + userName + ". You begin your journey with " + userHealth + " HP.\nTry not to die.\n")

while (userHealth != 0 || quit = true ) {

    var key = readline.keyIn();
    switch (key) {
    case "w":
        console.log("Walking")
        break;
    case "q":
        quit = true;
        console.log("QUITTER")
        break;
    default:
        console.log("What else would you like to do?")
        var menuIndex = readline.keyInSelect(menu, "Select which function you would like to access")
        break;



    }
}

if (userHealth != 0) {
console.log("You DIED")
} else {
    console.log("Thanks for playing")
}