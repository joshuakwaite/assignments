//simple javascript data types

var name = "josh"
var number = 1
var isBoolean = true

//other data types
undefined;
null;
NaN;

//complex data types
var students = ["morgan", "bill", "jim"];
var ages = [1, 3, 4, 5];
var admins = [true, true, false];
var multiple = [true, 42, "hello"] //usually not the best practice

//objects
var person = {
            firstName: "Dan",
            lastName: "Pak",
            age: 23,
            isJapanese: false
};

var phone = {
    color: "black",
    brand: "apple",
    version: "iphone7",
    calls: 100,
    owner: "bob",
    case: {
        color: "black",
        brand: "spigen",
    }
}

console.log(phone.case.brand)

                