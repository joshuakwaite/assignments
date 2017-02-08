angular.module("myApp")

.service("blueService", [function() {
    
    var blueScore = 100
    
    this.increment = function() {
        blueScore = blueScore + 1
        return blueScore
    }
    
    this.decrement = function() {
        blueScore -= 1
        return blueScore
    }
    
    this.reset = function() {
        blueScore = 100
        return blueScore
    }
    
}])