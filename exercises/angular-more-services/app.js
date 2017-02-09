angular.module("myApp", [])

.controller("mainController", ["$scope", "addService", function($scope, addService) {
    
    
    
    $scope.submitClicked = function(something) {
        $scope.test = addService.addIt(something)
        $scope.userInput = {};
    }
    
}])