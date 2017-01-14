// EXERCISE ONE


var name = "Joshua Kale Waite"

for (var i = 0 ; i < name.length; i++) {
    console.log(name[i])
} 


// EXERCISE TWO


var isFound = false

function findThis (string,letter) {
    for (var i = 0; i < string.length; i++) {
        if (letter === string[i]) {
            console.log(i)
            isFound = true
            break;
    }
    }
    if (!isFound) {
        console.log("The character is not found!")
    }
}

findThis("apple","g");


// EXERCISE THREE


function myFunction(x) {
    for (var i = 0; i < x.length; i++){
        console.log(x[i])
        if (x[i] === 42) {
            break;
        }
    }
}

myFunction([1,3,5,7,9,13,34,24,63,42,45,77,95,35,85])


// EXERCISE FOUR


function myFunction(x) {
    var lowest = x[0]
    for (var i = 0; i < x.length; i++)
        if (x[i] < lowest) {
            lowest = x[i]
        }
    return lowest;
}

console.log(myFunction([54, 27, 58, 12, 70, 43, 89, 33, 75, 12, 08, 54]))