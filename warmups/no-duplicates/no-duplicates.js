

function removeDuplicates(string) {
    var unique = ""
    var misFits = ""
    for (var i = 0; i < string.length; i++) {
        if (unique.indexOf(string[i]) !== -1) {
            misFits += string[i];
        } else {
            unique += string[i];
        }

    }
    console.log(unique)
    console.log(misFits)
}

removeDuplicates("bookkeeper larry")

//
//function removeDuplicates(string) {
//    var unique = ""
//    var misFits = ""
//    for (var i = 0; i < string.length; i++) {
//        if (string.match(/o/gi).length > 1) {
//            misFits = misFits + string[i];
//        } else {
//            unique = unique + string[i];
//        }
//
//    }
//    console.log(unique)
//    console.log(misFits)
//}
//
//removeDuplicates("bookkeeper larry")