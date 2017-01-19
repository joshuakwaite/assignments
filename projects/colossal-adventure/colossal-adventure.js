var readline = require("readline-sync");
var randomEnemy = []
var menu = ["View HP", "View Inventory", "Quit"]
var inventory = ["Healing Potion"]
var randomFriend = ["Pixie", "Faerie"]
var userHealth = 100
var maxHealth = 100
var help = ("Walk - Push 'W' to walk\n")
var quit = false;
var healingPotion = 25;
var fightQuestionTwo = ""
var run = false
var fightMenu = ["Punch", "Use Item in Inventory", "Run"]

/******************************************
 ***********HELPER FUNCTIONS***************/

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function typeGenerator() {
    var enemyType = ["Werewolf", "Vampire Underling", "Ghost"];
    return enemyType[Math.floor(Math.random() * enemyType.length)];
}

function hpGenerator(x) {
    if (x === "Werewolf") {
        return randomNumber(80, 100);
    } else if (x === "Vampire Underline") {
        return randomNumber(50, 79);
    } else {
        return randomNumber(20, 49);
    }
}

function Enemies() {
    this.type = typeGenerator();
    this.hitpoints = hpGenerator(this.type);
    this.attackPower = Math.floor(this.hitpoints / 3);

}

function fightMode() {
    while (randomEnemy.hitpoints > 0 && userHealth > 0 && run != true) {
        console.log("\nHere we go!\n")
        var fightChoice = readline.keyInSelect(fightMenu, "Choose what you would like to do.")
    }

}

function runOrFight(x) {
    if (x === "fight") {
        fightMode();
    } else if (x === "run") {
        if (randomNumber(0, 2) === 0) {
            console.log("Whew, looks like you got away")
        } else {
            console.log("You tried to escape, but couldn't! The monster takes a swipe at you and damages you for " + randomEnemy.attackPower + " hp!")
            userHealth -= randomEnemy.attackPower;
            if (userHealth < 1) {
                dead();
                return 'q';
                
            }
            console.log("Would you like to fight now? Or run again?")
            var fightQuestion = readline.prompt();
            fightQuestionTwo = fightQuestion.toLowerCase();
            runOrFight(fightQuestionTwo)

        }
    } else {
        console.log("You either need to run, or fight. \n\nWhich would you like to do?")
        var fightQuestion = readline.prompt();
        fightQuestionTwo = fightQuestion.toLowerCase();
        runOrFight(fightQuestionTwo);
    }
}


function generateEnemies(x) {
    for (var i = 0; i < x; i++) {
        randomEnemy = new Enemies();
    }
}

function walkMode() {
    var key = readline.keyIn();
    switch (key) {
    case "w":
        console.log("Walking")
        if (randomNumber(0, 3) === 3) {
            generateEnemies(1);
            console.log("\nUh oh, a " + randomEnemy.type + " popped out in front of you! This creature has " + randomEnemy.hitpoints + " HP and " + randomEnemy.attackPower + " attack power." + "\n\nWould you like to run, or fight?");
            var fightQuestion = readline.prompt();
            fightQuestionTwo = fightQuestion.toLowerCase();
            key = runOrFight(fightQuestionTwo);
            
        }
        break;
    case "q":
        quit = true;
        break;
    default:
        console.log("What else would you like to do?")
        var menuIndex = readline.keyInSelect(menu, "Select a menu item: ")
        if (menuIndex === 2) {
            quit = true;
        } else if (menuIndex === 1) {
            var inventoryIndex = readline.keyInSelect(inventory, "What would you like to use?")
            if (inventory[inventoryIndex] === "Healing Potion") {
                userHealth = userHealth + 25;
                inventory.splice(inventoryIndex, 1)
                if (userHealth > maxHealth) {
                    userHealth = maxHealth;
                }
                console.log("\n\n'Yuck'.. That tastes nasty, but your health increased by 25 HP.")
            }

        } else if (menuIndex === 0) {
            console.log("\n\nYour HP is: " + userHealth)
        }


        break;
    }
}




console.log("\nWELCOME TO BRAN CASTLE, HOME OF COUNT DRACULA\n\nPress enter to begin playing. Press control C at any time to quit.");

readline.prompt();
var userName = readline.question("\nMuahaha.. Good luck, you will need it.\n\nWhat is your name traveler? ")
console.log("\nGreetings, " + userName + ". You begin your journey with " + userHealth + " HP.\nTry not to die.\n")

/***************************************************
 ********************CORE***************************/

while (userHealth > 0 && quit != true) {

    walkMode();




}

/***************************************************
 ********************END****************************/
function dead() {
    if (userHealth < 1) {
        console.log("You DIED")
    } else {
        console.log("\nThanks for playing")
    }
}
dead();