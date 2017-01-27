var names = ["Anna", "Bill", "Charlay", "Dexter", "Emily", "Frank", "George", "Hal", "Isaac", "Jill"];

for (var i = 0; i < names.length; i++) {
    attemptCall(names[i], dontCall, call, text)
        
    }

    function attemptCall(name, dontCall, call, text) {
        name = name.toLowerCase();
        if(name.lastIndexOf("a") !== name.indexOf("a") ) {
            text(name);
        } else if  (name.length % 2 === 1) {
            dontCall(name)
        } else if 
            (name.length % 2 === 0) {
            call(name)
        } 
    }
        


function dontCall(name){
    console.log("you did not call " + name)
}
function call(name){
    console.log("you need to call " + name)
}
function text(name){
    console.log("You need to text " + name)
}

