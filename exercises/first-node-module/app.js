var math = require("./module.js")

function doMath(x, y, z) {
    switch (y) {
    case "+":
        return math.addition(x, z)
        break;
    case "-":
        return math.subtraction(x, z)
        break;
    case "*":
        return math.multiplication(x, z)
        break;
    case "/":
        return math.division(x, z)
        break;
    case "^":
        return math.exponentiation(x, z)
        break;
    }
}

console.log(doMath("4", "^", "3"))