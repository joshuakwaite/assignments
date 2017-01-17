var date = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

var day = weekday[date.getDay()];
var time = date.toLocaleTimeString();

function giveDateTime() {
    
    return ["Today is: " + day, "The current time is: " + time]
    
}

console.log(giveDateTime());