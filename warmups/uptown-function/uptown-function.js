EXERCISE ONE
var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

var string = ""


function printThis(x) {
for (var i = 0; i < x.length; i++) {
    string = string + x[i] + " "
}
return string
}

console.log(printThis(lyrics))

 EXERCISE TWO
var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

var string = ""


function printThisBackwards(x) {
for (var i = x.length-1; i > 0; --i) {
    string = string + x[i] + " "
}
    return string
}

console.log(printThisBackwards(lyrics))

EXERCISE THREE
var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

var string = ""


function printThis(x) {
for (var i = 0; i < x.length; i+=2) {
    string = string + x[i] + " "
}
return string
}

console.log(printThis(lyrics))

//EXERCISE FOUR
var lyrics = ["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
              "myself", "I'm", "so", "pretty"];

var string = [];


function doubleFunction(x) {
    for (var i = 1; i <= x.length; i += 2) {
        string = string + x[i] + " "
        for (var l = i - 1; l < i; l += 2) {
            string = string + x[l] + " "    
        }
    }
}

doubleFunction(lyrics);
string = string.split(" ")
string = string.filter(function(n){
    return n != "undefined" }); 


console.log(string.join(" "))


//ANOTHER WAY
//function pairReverser(lyrics) {
//    var reversePair = "";
//    if (lyrics.length % 2 != 0) {
//        for (var i = 1; i <= lyrics.length; i += 2) {
//            if (i < lyrics.length) {
//                reversePair = reversePair + " " + lyrics[i];
//                reversePair = reversePair + " " + lyrics[i - 1];
//            } else {
//                reversePair = reversePair + " " + lyrics[i - 1];
//            }
//        }
//    } else {
//        for (var i = 1; i <= lyrics.length; i += 2) {
//            reversePair = reversePair + " " + lyrics[i];
//            reversePair = reversePair + " " + lyrics[i - 1];
//        }
//    }
//    return reversePair