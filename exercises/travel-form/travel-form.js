function myFunction() {
    var form = document.getElementById("form1");
    var select = document.getElementById("select1");
    var arr = []
    arr.push("First name: " + form.elements.firstName.value);
    arr.push("\nLast name: " + form.elements.lastName.value);
    arr.push("\nAge: " + form.elements.age.value);
    arr.push("\nGender: " + form.elements.gender.value);
    arr.push("\nDestination: " + select.value);
    arr.push("\nDiet: " + form.elements.diet.value);
    alert(arr)
    
}


document.getElementById("button").addEventListener("click",myFunction);

