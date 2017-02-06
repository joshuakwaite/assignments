


var findUniques = function(x,y) {
    var uniques = []
    
    for (var i = 0; i < x.length; i++) {
        if (y.indexOf(x[i]) == -1) {
            uniques.push(x[i])
        }
    }
    
    
     for (var j = 0; j < y.length; j++) {
        if (x.indexOf(y[j]) == -1) {
            uniques.push(y[j])
        }
    }
    
    return uniques
}






console.log(findUniques([1, 2, 5], [1, 2, 8, 9, 10]));  // [5, 8, 9, 10] 
