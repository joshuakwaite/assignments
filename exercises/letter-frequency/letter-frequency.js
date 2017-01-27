function findLetters(x) {
    var arrString = x.split("")
    var letter = ""
    var counter = 0
    var letterCountString = ""
    var noDupString = ""

    for (var i = 0; i < arrString.length; i++) {
        letter = arrString[i]
        for (var j = 0; j < arrString.length; j++) {
            if (letter === arrString[j]) {
                counter++
            }
        }
        if (letterCountString.indexOf(letter) === -1) {
            letterCountString += (`"` + letter + '": ' + counter + `\n`)
            noDupString += letter

        }
        counter = 0
    }
    console.log(letterCountString)
    console.log(noDupString)

}

findLetters("slimy smelly solution")

//
//var phrase = 'slimy smelly solution';
//
//function letterCount(str) {
//    var count = {};
//    
//    for (var i = 0; i < str.length; i++) {
//        var letter = str[i];
//        if (count[letter] !== undefined) {
//            count[letter]++;
//        } else {
//            count[letter] = 1;
//        }
//    }
//    console.log(count);
//}
//
//letterCount(phrase);