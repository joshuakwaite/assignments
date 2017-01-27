var night = false;

function calculate() {

    var goomba = $("#goombaInput").val();
    var bobomb = $("#bobombInput").val();
    var cheepcheep = $("#cheepcheepInput").val();
    goomba = parseInt(goomba)
    bobomb = parseInt(bobomb)
    cheepcheep = parseInt(cheepcheep)
    var sum = (goomba * 5) + (bobomb * 7) + (cheepcheep * 11)
    var sumOne = goomba * 5
    var sumTwo = bobomb * 7
    var sumThree = cheepcheep * 11

    $("#output").text(sum);
    $("#subtotalOne").text(sumOne);
    $("#subtotalTwo").text(sumTwo);
    $("#subtotalThree").text(sumThree);
    var sound = new Audio("sound.mp3")
    sound.play();
}

function nightMode() {
    if (night === false) {
        $("html").css("background", "black");
        $("#section1").css("background", "grey");
        $("#section2").css("background", "grey");
        $("#section3").css("background", "grey");
        $("header").css("background", "grey");
        $("article").css("background", "grey");
        night = true
    } else {
        $("html").css("background-image", "url(bg4.jpg)");
        $("#section1").css("background", "#40b34f");
        $("#section2").css("background", "#fed330");
        $("#section3").css("background", "#1daee4");
        $("header").css("background", "#ec3b2e");
        $("article").css("background", "#ec3b2e");
        night = false
    }
}

$("#button").on("click", calculate);
$("#button1").on("click", nightMode);