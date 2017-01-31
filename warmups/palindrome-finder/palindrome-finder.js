function palindrome(x) {
    var stringArr = x.split("")
    var noChars = []
    for (var i = 0; i < stringArr.length; i++) {
        if (x[i] === "," || x[i] === " " || x[i] === "!" || x[i] === "?" || x[i] === "." || x[i] === "-" || x[i] === ")" || x[i] === "(" || x[i] === "'") {
            
        } else {
            noChars.push(x[i])
        }
    }
    var oldString = noChars.join("");
    var arrReversed = noChars.reverse();
    var stringJoined = arrReversed.join("");
    stringJoined = stringJoined.toLowerCase();
    oldString = oldString.toLowerCase();
    if (oldString == stringJoined) {
        console.log(true);
    } else {
        console.log(false);
    }
}

palindrome("Star Rats!"); // true  
palindrome("palindrome"); // false  
palindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!"); // true
palindrome("Do good? I? No! Evil anon I deliver. I maim nine more hero-men in Saginaw, sanitary sword a-tuck, Carol, I- Lo! - rack, cut a drowsy rat in Aswan. I gas nine more hero-men in Miami. Reviled, I (Nona) live on. I do, O God!")
palindrome("Go hang a salami, I'm a lasagna hog")