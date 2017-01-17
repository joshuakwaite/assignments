//EXERCISE ONE

function addTwoNumbers (x,y) {
    return parseInt(x) + parseInt(y)
}

addTwoNumbers(15,4);

//EXERCISE TWO

function biggestNumber(x) {
    var biggestNumber = x[0]
    for (var i = 0; i < x.length; i++) {
        if (biggestNumber < x[i]) {
            biggestNumber = x[i]
        }
    }
    return biggestNumber
}

biggestNumber([2, 8, 10]);

//EXERCISE THREE

function evenOrOdd (x) {
    if (x % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

evenOrOdd(6);

//EXERCISE FOUR

function stringLength(x) {
    if (x.length <= 20) {
        return x.concat(x)
    } else {
        return x.substr(0,10)
    }
    
}

console.log(stringLength("Thistextislongerthantwentycharacterslong"))