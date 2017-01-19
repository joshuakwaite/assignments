var ask = require('readline-sync');
var input = ask.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(ask.question('How many letters would you like to shift? '));
var inputIndex = []
var aIndex = []
var afterShiftInput = []
var combinedIndex = []

// index out the alphabet
var alphabet = "abcdefghijklmnopqrstuvwxyz"
alphabet = alphabet.split("");

input = input.split("")
    //index out the input in relation to the alphabet

for (var i = 0; i < input.length; i++) {
    inputIndex.push(alphabet.indexOf(input[i]))
}

for (var l = 0; l < inputIndex.length; l++) {
    afterShiftInput.push(inputIndex[l] + shift)
}

for (var o = 0; o < afterShiftInput.length; o++) {
    combinedIndex.push(alphabet[afterShiftInput[o]])
}



//for (var c = 0; c < inputIndex.length; c++) {
//    afterShiftInput = afterShiftInput + inputIndex[c] + shift
//}

console.log(combinedIndex)






//var ask = require('readline-sync');
//var input = ask.question('What phrase would you like to encrypt? ').toLowerCase();
//var shift = parseInt(ask.question('How many letters would you like to shift? '));
//var alphabet = "abcdefghijklmnopqrstuvwxyz";
//
//
//function caesarCipher(input, shift) {
//    var shifted = "";
//    for (var i = 0; i < input.length; i++) {
//        if (alphabet.indexOf(input[i]) < 0) {
//            shifted += input[i];
//        } else if (alphabet.indexOf(input[i]) + shift > 25) {
//            shifted += alphabet[alphabet.indexOf(input[i]) + shift - 26];
//        } else {
//            shifted += alphabet[alphabet.indexOf(input[i]) + shift];
//        }
//    }
//    return shifted;
//}