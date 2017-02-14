
function addition(x, y) {
   return parseInt(x) + parseInt(y)
}

function subtraction(x, y) {
   return x - y
}

function multiplication(x, y) {
   return x * y
}

function division(x, y) {
   return x / y
}

function exponentiation(x, y) {
   return  Math.pow(x,y)
}

module.exports = {
    addition: addition,
    subtraction: subtraction,
    multiplication: multiplication,
    division: division,
    exponentiation: exponentiation,
}