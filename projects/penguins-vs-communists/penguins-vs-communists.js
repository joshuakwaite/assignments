function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

class Parties {
    constructor(name, population) {
        this.name = name;
        this.population = population;
    }

}

var pengParty = new Parties("Penguins", 1000000);
var comParty = new Parties("Communists", 1000000);

function firstMove(callback) {
    if (callback === 1) {
        console.log("Penguins attack first!")
        sendNuke("Communists", onHit, onMiss)
        return callback
    } else {
        console.log('Communists attack first!')
        sendNuke("Penguins", onHit, onMiss)
        return callback
    }
}

function onHit(party) {
    var damage = randomNumber(1, 100000)
    console.log(`The attack hit! Ouch, looks like it took out ${damage} of the ${party} population. `)
    if (party === "Penguins") {
        return pengParty.population -= damage
    } else {
        return comParty.population -= damage
    }

}

function onMiss(party) {
    console.log(`Aw shoot, the nuke missed the ${party} and landed in North Korea.`)
}

function sendNuke(party, onHit, onMiss) {
    if (randomNumber(1, 2) === 1) {
        onHit(party);
    } else {
        onMiss(party);
    }
}


function goGame() {
    var firstTurn = firstMove(randomNumber(1, 2));
    while (pengParty.population > 0 && comParty.population > 0) {
        firstTurn += 1
        if (firstTurn % 2) {
            console.log(`Its the Penguins turn! They fire a nuke at their enemy.`)
            sendNuke("Communists", onHit, onMiss)
        } else {
            console.log(`Its the Communists turn! They fire a nuke at their enemy.`)
            sendNuke("Penguins", onHit, onMiss)

        }
    }
    if (pengParty.population < 0) {
        pengParty.population = 0

    }
    if (comParty.population < 0) {
        comParty.population = 0
    }
}

goGame();
console.log(pengParty);
console.log(comParty);