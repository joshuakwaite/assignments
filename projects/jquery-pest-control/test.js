//function missingChar(str, n){ 
//	var newString = ""
//    for (var i = 0; i < str.length; i++) {
//      	if (str[i] != n) {
//            console.log(str[i])
//       	 	newString = newString + str[i];
//        } else {
//         continue;
//             
//        }
//    }
//                       return newString;
//}
//                                   
//console.log(missingChar("goomba","o"));

var startHi = function(str){     
    console.log(str.substr(0,2))
  if (str.substr(0,2 === "hi")) {
      return true;
      } else {
      return false;
      }
}
console.log(startHi("hi"));