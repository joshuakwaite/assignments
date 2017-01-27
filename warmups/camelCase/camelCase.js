
function camelCase(x) {
    var camelCase = ""
    for (var i = 0; i < x.length; i++) {
        if(x[i] === " " || x[i] === "_" || x[i] === "-") {
            camelCase += x[i + 1].toUpperCase();
            i++
            
        } else {
            camelCase += x[i]
        }

    }
    
console.log(camelCase)

}

camelCase("Camel case_this-please!")