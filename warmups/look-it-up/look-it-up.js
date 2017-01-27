var readline = require("readline-sync")

var menu = ["Look up a word", "Add a word", "Quit"]

var dictionary = {};


function addWord(word, definition) {
    dictionary[word] = definition;
}

function findWord(word) {
    if (dictionary[word] === undefined) {
        console.log("not here")
    } else {
        return dictionary[word]
    }
}

function chooseMenu() {
    var select = readline.keyInSelect(menu, "Choose what you would like to do")
    if (select === 0) {
        console.log("What word would you like to look up?")
        var lookup = readline.question();
        console.log(findWord(lookup.toLowerCase));
        chooseMenu();
    } else if (select === 1) {
        console.log("What word would you like to add?")
        var word = readline.prompt();
        console.log("Great! Please add a definition")
        var def = readline.prompt();
        addWord(word.toLowerCase, def);
        console.log("Okay, your word has been added!")
        chooseMenu();
    } else if (select === 2) {
        return;
    }
}

chooseMenu();