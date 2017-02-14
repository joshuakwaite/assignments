var readline = require("readline-sync");

// variables//
var adventures = ["Candy Land", "Dark Forest", "Hogwarts"]
var candy = ["liquorish", "chocolate", "gummy candy", "icing"]
var choice = ["Yes", "No"]

// helper functions //

function randomize(array) {
    return array[Math.floor(Math.random() * candy.length)]
}

//storyline beginning//
console.log("Welcome to Josh's adventure game! What is your name?")

var name = readline.prompt()

console.log("Welcome, " + name + "! Now tell me, what adventure path would you like to start down?")

var adventureChoice = readline.keyInSelect(adventures, 'Please select your adventure.')

if (adventureChoice === 0) {
    candyLand();
} else if (adventureChoice === 1) {
    darkForest();
} else if (adventureChoice === 2) {
    hogwarts();
}


//CANDYLAND STORYLINE//
function candyLand () {
    console.log("Great! This will be a delicious adventure..")
    setTimeout(function(){
    console.log("\nWelcome to Candy Land! You begin this journey in what appears to be a castle made out of rich, creamy chocolate. The room you are in is small, with one chocolate table in the center and chocolate chairs all around. In front of you, you see a door made out of " + randomize(candy) + ". Would you like to proceed through the door?")
    
    var choiceOne = readline.keyInSelect(choice, "Select Yes or No.")
    
    if(choiceOne === 1) {
        console.log("The room collapses all around you - You can't escape in time and are crushed by the weight of the chocolate. Oops, should have gone through the door.\n\nYou have DIED.")
    } else if (choiceOne === 0) {
        console.log("You walk through the door, into a blinding light..")
    }
    
                          }, 2000)
}

//DARKFOREST STORYLINE//
function darkForest () {
    console.log("Oooh, the daring type.. Here we go...")
    setTimeout(function(){
    console.log("\nWelcome to the Dark Forest! You begin this journey in what appears to be a tiny little shack, with windows pearing to the outside. Even though it's night, you can see trees swaying in the howling wind outside the window from where you stand in the small shack. Opposite of you, there is a old door that must lead to the outdoors. Do you decide to go through the door?" )
    
    var choiceOne = readline.keyInSelect(choice, "Select Yes or No.")
    
    if(choiceOne === 1) {
        console.log("BOOM! A bomb went off, and you were right inside the house it went off in... Oops, should have gone through the door.\n\nYou have DIED.")
    } else if (choiceOne === 0) {
        console.log("You walk through the door, and see a ferocious beast staring you in the face...")
    }
    
                          }, 2000)
    
    
}
//HOGWARTS STORYLINE//
function hogwarts () {
    console.log("Well, that's typical. Lets see how magical you are!")
    setTimeout(function(){
    console.log("\nWelcome to Hogwarts! You begin this journey in what appears to be a the common area of your house dormitory. You are surrounded by people, many of them sitting at tables like yourself, studying. In front of you, you see a door that must lead to the rest of the school. Would you like to proceed through the door?")
    
    var choiceOne = readline.keyInSelect(choice, "Select Yes or No.")
    
    if(choiceOne === 1) {
        console.log("Lord Voldemort crashes through the window, and kills everyone in the room. Oops, should have gone through the door.\n\nYou have DIED.")
    } else if (choiceOne === 0) {
        console.log("You walk through the door and immediately see a huge hippogriff boding you to take a ride...")
    }
    
                          }, 2000)
    
    
}
