angular.module("myApp", [])

.controller("mainController", ["$scope", function ($scope) {

        $scope.uglyThing = []

    
    $scope.clicked = function () {
        

        $scope.uglyThing.push($scope.thing)
        $scope.thing = {}
        
        
    }

}])