var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]; var output = []

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var upper = alphabet.toUpperCase();

function addTogether(){
    for (var i = 0; i < people.length; i++) {
        output.push(people[i] + ":")
        for (var l = 0; l < upper.length; l++){
            output.push(upper[i])
        }
    }
console.log(output);
}

addTogether();