function formatMoney(x) {
    var a = x.toString()
    var b = ".";
    var c = ",";
    var d = "$";
    var positionOne = a.length - 2
    var positionTwo = a.length - 5
    var positionThree = a.length - 8
    var positionFour = a.length - 9
    
//    
//    var output = [a.slice(0, positionOne), b, a.slice(positionOne)].join('');
//    var outputTwo = [output.slice(0, positionTwo), c, output.slice(positionTwo)].join('');  
//    var outputThree = [outputTwo.slice(0, positionThree), c, outputTwo.slice(positionThree)].join('');
//    var outputFour = "$" + outputThree
    
    
    
    var output = [a.slice(0,positionOne), b, a.slice(positionOne)].join("");
        output = `$${output}`
    for (var i = 2; i < a.length; i+3) {
         output = [output.slice(0,i), c, output.slice(i)].join("");
        i++
    }
        console.log(output);


}

formatMoney(123456)