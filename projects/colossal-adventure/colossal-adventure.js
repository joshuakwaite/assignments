while (userHealth != 0) {

var readline = require("readline-sync");
var randomEnemy = ["Werewolf", "Vampire Underling", "Imp", "Ghoul", "Zombie", "Ghost"]
var randomFriend = ["Pixie", "Faerie"]
var userHealth = 100
var help =  ("Walk - Push 'W' to walk\n")
    
function generateUser () {
    
}

console.log("\nWELCOME TO BRAN CASTLE, HOME OF COUNT DRACULA\n\nPress enter to begin playing. Press control C at any time to quit.");

readline.prompt();
var userName = readline.question("\nMuahaha.. Good luck, you will need it.\n\nWhat is your name traveler? ")
console.log("\nGreetings, " + userName + ". You begin your journey with " + userHealth + " HP.\nTry not to die.\n")

}

console.log("You DIED")
