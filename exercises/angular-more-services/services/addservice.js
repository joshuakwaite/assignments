angular.module("myApp")

.service("addService", function () {

    var cartoonList = []

    this.addIt = function (userInput) {
        cartoonList.push(userInput)
        return cartoonList
    }
})