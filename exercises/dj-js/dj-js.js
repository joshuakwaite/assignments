var divBox = document.getElementById("box")

function changeBlue() {
    divBox.style.backgroundColor = "blue";
}

function changeWhite() {
    divBox.style.backgroundColor = "white";
}

divBox.addEventListener("mouseover", changeBlue)


function changeRed() {
    divBox.style.backgroundColor = "red";
}

divBox.addEventListener("mousedown", changeRed)

function changeYellow() {
    divBox.style.backgroundColor = "yellow";
}

divBox.addEventListener("mouseup", changeYellow)

function changeOrange() {
    divBox.style.backgroundColor = "orange";
}

window.addEventListener("scroll", changeOrange)

function changeGreen() {
    divBox.style.backgroundColor = "green";
}

divBox.addEventListener("dblclick", changeGreen)

function keypress(event) {
        switch (event.which) {
            case 89:
                changeYellow();
                break;
            case 71:
                changeGreen();
                break;
            case 79:
                changeOrange();
                break;
            case 82:
                changeRed();
                break;
            case 66:
                changeBlue();
                break;
            default:
                changeWhite();       
        }
}

document.addEventListener("keydown",keypress)