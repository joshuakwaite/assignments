function fixTeens(number) {
    if (number == 13 || number == 14 || (number >= 17 && number <= 19)) {
        return false;
    } else {
        return number;
    }
}

function returnThis (a,b,c) {
    var sum = fixTeens(a) + fixTeens(b) + fixTeens(c);
    console.log(sum);
}

returnThis(15,2,14)