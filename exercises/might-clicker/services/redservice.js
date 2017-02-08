angular.module("myApp")

.service("redService", [function () {

    var redScore = 100
    
    this.increment = function () {
        redScore += 1
        return redScore
    }

    this.decrement = function () {
        redScore -= 1
        return redScore
    }

    this.reset = function () {
        redScore = 100
        return redScore
    }

}])