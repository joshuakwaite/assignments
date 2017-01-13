//var lyrics = ["This", "hit", "that", "ice", "cold",  
//              "Michelle", "Pfeiffer", "that", "white", 
//              "gold", "This", "one", "for", "them", 
//              "hood", "girls", "Them", "good", "girls", 
//              "straight", "masterpieces", "Stylin'", 
//              "whilen'", "livin'", "it", "up", "in", 
//              "the", "city", "Got", "Chucks", "on", 
//              "with", "Saint", "Laurent", "Gotta", "kiss", 
//              "myself", "I'm", "so", "pretty"];
//
//var string = ""
//
//
//function printThis(x) {
//for (var i = 0; i < x.length; i++) {
//    string = string + x[i] + " "
//}
//return string
//}
//
//console.log(printThis(lyrics))

//var lyrics = ["This", "hit", "that", "ice", "cold",  
//              "Michelle", "Pfeiffer", "that", "white", 
//              "gold", "This", "one", "for", "them", 
//              "hood", "girls", "Them", "good", "girls", 
//              "straight", "masterpieces", "Stylin'", 
//              "whilen'", "livin'", "it", "up", "in", 
//              "the", "city", "Got", "Chucks", "on", 
//              "with", "Saint", "Laurent", "Gotta", "kiss", 
//              "myself", "I'm", "so", "pretty"];
//
//var string = ""
//
//
//function printThisBackwards(x) {
//for (var i = x.length-1; i > 0; --i) {
//    string = string + x[i] + " "
//}
//    return string
//}
//
//console.log(printThisBackwards(lyrics))

//var lyrics = ["This", "hit", "that", "ice", "cold",  
//              "Michelle", "Pfeiffer", "that", "white", 
//              "gold", "This", "one", "for", "them", 
//              "hood", "girls", "Them", "good", "girls", 
//              "straight", "masterpieces", "Stylin'", 
//              "whilen'", "livin'", "it", "up", "in", 
//              "the", "city", "Got", "Chucks", "on", 
//              "with", "Saint", "Laurent", "Gotta", "kiss", 
//              "myself", "I'm", "so", "pretty"];
//
//var string = ""
//
//
//function printThis(x) {
//for (var i = 0; i < x.length; i+=2) {
//    string = string + x[i] + " "
//}
//return string
//}
//
//console.log(printThis(lyrics))

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

function doubleFunction(x) {
    for (var i = 1; i < x.length; i+=2) {
        string = string + x[i] + " "
        console.log(x[i])
        console.log(x[i--])
        continue;
    }
    }

doubleFunction(lyrics);

console.log(string)







