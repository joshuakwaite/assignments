Array.prototype.myFilter = function (x) {
    var array = this;
    if (x > 5) 
         return false;
    else
         return true;
};

var numericArray = [8, 3, 4, 32, 1, 9, 3, 5, 42, 56];


function filterArray(x) {
    var newArray = []
    for (var i = 0; i < x.length;  i++) {
        if (x.myFilter(x[i])) {
            newArray.push(x[i])
        }
    }
    console.log(newArray);
}

filterArray(numericArray);








//Array.prototype.myFilter = function (callback) {  
//  var array = this;
//  var newArray = [];    
//  
//  for(var i = 0; i < array.length; i++){
//      if(callback(array[i])){
//         newArray.push(array[i]);
//      }
//  }
//
//  return newArray;
//     
//};
//
//
////test
//
//var ourArray = ["pan", "can", "apple", "sauce"];
//
//var ourNewArray = ourArray.myFilter(function(item){
//    return item.length < 4;
//})
//
//console.log(ourNewArray);
//
////returns [ 'pan', 'can' ]
//
//
////another test
//
//
//var numericArray = [8, 3, 4, 32, 1, 9, 3, 5, 42, 56];
//
//var noLargeNumbers =  numericArray.myFilter(function (element) {  
//  return element <= 5;
//});
