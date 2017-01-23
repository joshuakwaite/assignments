var names = ["Anna", "Bill", "Charlay", "Dexter", "Emily", "Frank", "George", "Hal", "Isaac", "Jill"];  

for (var i = 0; i < names.length; i++) {
    attemptCall(names[i], dontCall, call, text)
        
    }

    function attemptCall(name, dontCall, call, text) {
        if (name.length % 2 === 1) {
            dontCall(name)
        }
    }


function dontCall(name){
    console.log("you did not call " + name)
}
function call(){}
function text(){}