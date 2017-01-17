function myFunction() {

    var goomba = document.getElementById("goombaInput").value;
    var bobomb = document.getElementById("bobombInput").value;
    var cheepcheep = document.getElementById("cheepcheepInput").value;
    goomba = parseInt(goomba)
    bobomb = parseInt(bobomb)
    cheepcheep = parseInt(cheepcheep)
    var sum = (goomba * 5) + (bobomb * 7) + (cheepcheep * 11)
    var sumOne = goomba * 5
    var sumTwo = bobomb * 7
    var sumThree = cheepcheep * 11

    document.getElementById("output").textContent = sum
    document.getElementById("subtotalOne").textContent = sumOne
    document.getElementById("subtotalTwo").textContent = sumTwo
    document.getElementById("subtotalThree").textContent = sumThree
}

document.getElementById("button").addEventListener("click", myFunction);