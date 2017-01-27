function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

class Create {
    constructor(name, totalCoins, status, gameActive) {
        this.name = "Luigi";
        this.totalCoins = 0;
        this.status = "Big";
        this.star = false
        this.gameActive = true;
    }
    setName(namePicked) {
        if (namePicked === "Mario") {
            this.name = "Mario"
        } else {
            this.name = "Luigi"
        }
    }
    gotHit() {
        if (this.status === "Powered Up") {
            this.status = "Big"
        } else if (this.status === "Big") {
            this.status = "Small"
        } else {
            this.status = "Dead"
        }
    }
    gotPowerUp() {
        this.status = "Powered Up"
    }
    addCoin() {
        this.totalCoins++
    }
    print() {
        console.log(this.name)
        console.log(this.totalCoins)
        console.log(this.status)
        console.log(this.star)
        console.log(this.gameActive)
    }
}

var playerOne = new Create();


function start() {
    switch (randomNumber(1, 3)) {
    case 1:
        playerOne.gotHit();
        console.log(playerOne.name + " was hit by an enemy!")
        break;
    case 2:
        playerOne.gotPowerUp();
        console.log(playerOne.name + " got a power up!")
        break;
    case 3:
        playerOne.addCoin();
        console.log(playerOne.name + " got a coin!")
        break;
    }
}

for (var i = 0; i < 3; i++) {
    start();
    playerOne.print();
}

