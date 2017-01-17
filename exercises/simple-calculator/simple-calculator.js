function doAddition() {
    var additionOne = document.getElementById("additionOne").value;
    var additionTwo = document.getElementById("additionTwo").value;
    additionOne = parseInt(additionOne);
    additionTwo = parseInt(additionTwo);
    var additionMath = additionOne + additionTwo;
    document.getElementById("outputOne").textContent = additionMath

}

document.getElementById("buttonOne").addEventListener("click",doAddition);

function doSubtraction() {
    var subtractionOne = document.getElementById("subtractionOne").value;
    var subtractionTwo = document.getElementById("subtractionTwo").value;
    subtractionOne = parseInt(subtractionOne);
    subtractionTwo = parseInt(subtractionTwo);
    var subtractionMath = subtractionOne - subtractionTwo;
    document.getElementById("outputTwo").textContent = subtractionMath

}

document.getElementById("buttonTwo").addEventListener("click",doSubtraction);

function doMultiply() {
    var multiplyOne = document.getElementById("multiplyOne").value;
    var multiplyTwo = document.getElementById("multiplyTwo").value;
    multiplyOne = parseInt(multiplyOne);
    multiplyTwo = parseInt(multiplyTwo);
    var multiplyMath = multiplyOne * multiplyTwo;
    document.getElementById("outputThree").textContent = multiplyMath

}

document.getElementById("buttonThree").addEventListener("click",doMultiply);

