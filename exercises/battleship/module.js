function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

class Location {
    constructor() {
        this.isShip = shipFinder();
        this.hit = "";
        this.display = "O"

    }
}

function shipFinder() {
    if (randomNumber(1, 5) === 3) {
        return true;
    } else {
        return false;
    }
}



module.exports = {
    Location: Location,
}
