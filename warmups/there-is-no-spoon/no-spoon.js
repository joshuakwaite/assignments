//This exercise is to create objects in code from real objects around us, and include a function.

var roomObjects = [];

var waterBottle = {
    ozSize: 20,
    brand: "Glacier Rain",
    isClear: true,
    refills: 0,
    refillAmount: function () {
            this.refills++;
        return this.refills
    }
}


waterBottle.refillAmount();
roomObjects.push(waterBottle);


var shirt = {
    color: "blue/white",
    isLongSleeve: true,
    isButtonUp: true,
    changeColor: function (color) {
       return this.color = color
        
    }
}

shirt.changeColor("red")
roomObjects.push(shirt);


var person = {
    name: "Aaron",
    attendsVschool: true,
    shirt: [
        {
            color: "grey",
            isLongSleeve: true,
            hasHood: true,
        }
    ]
}

roomObjects.push(person);


var computer = {
    isElectronic: true,
    howManyInRoom: 20,
    OS: "Mac",
    speak: function() {
        alert("PC is better");
        console.log("PC is better")
    }
}

roomObjects.push(computer);


var phone = {
    brand: "iphone",
    color: "black",
    case: "yes",
    destroy: function () { //DON'T RUN THIS FUNCTION
        for(i = 0; i === i; i++) {}
    }
}

roomObjects.push(phone);


var lights = {
    color: "white",
    amount: 9,
    isHanging: true,
    changeColor: function () {
        this.color = "Red";
        document.getElementById("write").style.color = "red";
        return this.color;
    }
}

roomObjects.push(lights);


var wall = {
    color: "wood",
    isStandAlone: true,
    weightInPounds: 200,
    thinkOfAnotherFunction: function() {
        this.thisIsHard = "I can't think of another function to write"
    }
}

wall.thinkOfAnotherFunction()
roomObjects.push(wall);


var coffeeMachine = {
    color: "black",
    isBrewing: false,
    isClean: true,
    turnOn: function () {
        this.isBrewing = true;
        console.log("Your coffee is brewing. Please come back to grab a fresh cup")
        
    },
    clean: function () {
        this.isClean = true;
        console.log("Machine is cleaned")
    }
}

roomObjects.push(coffeeMachine);

var mouse = {
    color: "black",
    brand: "apple",
    isOn: true,
    smile: function () {
        console.log("smile")
    }
}

roomObjects.push(mouse)



//document.getElementById("write").innerHTML = JSON.stringify(roomObjects)

console.log(roomObjects)
    