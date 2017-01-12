var date = new Date().getHours();
//var age = prompt("what is your age?")
//var isAge = (age < 18) ? "Too Young": "Too Old"

function monkeyTrouble(aSmile,bSmile) {
    if ((aSmile === true && bSmile === true) || (aSmile === false && bSmile === false)) {
        console.log(true)
    } else {
        console.log("You're not in trouble :)")
    }
}

function timeGreeting() {
    if (date < 12) {
console.log("Good morning!")
    } else if (date >= 12 && date < 17) {
        console.log("Good afternoon!")
    } else if (date >= 17 && date <= 24)
        console.log("Good evening!")
}

monkeyTrouble(false,true);
timeGreeting();
//console.log(isAge);

