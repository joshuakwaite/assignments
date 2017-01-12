var date = new Date();
var hours = date.getHours();
var age = prompt("what is your age?")
var isAge = (age < 18) ? "Too Young": "Too Old"

function monkeyTrouble(aSmile,bSmile) {
    if ((aSmile === true && bSmile === true) || (aSmile === false && bSmile === false)) {
        console.log(true)
    } else {
        console.log("You're not in trouble :)")
    }
}

function timeGreeting() {
    if (hours < 12) {
console.log("Good morning!")
    } else if (hours >= 12 && hours < 17) {
        console.log("Good afternoon!")
    } else if (hours >= 17 && hours <= 24)
        console.log("Good evening!")
}

monkeyTrouble(false,true);
timeGreeting();
console.log(isAge);

