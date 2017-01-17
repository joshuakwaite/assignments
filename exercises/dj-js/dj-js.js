var divBox = document.getElementById("box")

function changeBlue () {
    divBox.style.backgroundColor = "blue";
}

divBox.addEventListener("click",changeBlue)


function changeRed () {
    divBox.style.backgroundColor = "red";
}

divBox.addEventListener("mousedown",changeRed)

function changeYellow () {
    divBox.style.backgroundColor = "yellow";
}

divBox.addEventListener("mouseup",changeYellow)

function changeOrange () {
    divBox.style.backgroundColor = "orange";
}

divBox.addEventListener("scroll",changeOrange)