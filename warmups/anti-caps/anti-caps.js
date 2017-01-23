function isCaps(letter) {  
  return letter === letter.toUpperCase();
}

function antiCaps(x,check) {
    var inverted = ""
    for(var i = 0; i < x.length; i++) {
        if (check(x[i])) {
        inverted += x[i].toLowerCase();
        }  else {
            inverted +=x[i].toUpperCase();
        }
    }
    console.log(inverted)
}

antiCaps("teSt",isCaps)
