var monsters = []

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function hpGenerator(x) {
    if (x === "Ancient Dragon") {
        return randomNumber(80, 100);
    } else if (x === "Prowler") {
        return randomNumber(50, 79);
    } else {
        return randomNumber(20, 49);
    }
}

function typeGenerator() {
    var enemyType = ["Ancient Dragon", "Prowler", "Mighty Grunt"];
    return enemyType[Math.floor(Math.random() * enemyType.length)];
}

function Enemies() {
    this.type = typeGenerator();
    this.hitpoints = hpGenerator(this.type);
    this.defense = this.hitpoints * 3;

}


function generateEnemies(x) {
    for (var i = 0; i < x; i++) {
        var randomEnemy = new Enemies();
        monsters.push(randomEnemy);
    }
}

generateEnemies(50);

console.log(monsters);