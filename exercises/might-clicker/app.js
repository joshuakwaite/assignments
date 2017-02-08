angular.module("myApp", [])

.controller("mainController", ["$scope","blueService","redService", function($scope, blueService, redService) {
    
    $scope.blueScore = "100"
    $scope.redScore = "100"
    
    $scope.bluePress = function() {
        $scope.blueScore = blueService.increment();
        $scope.redScore = redService.decrement();
        if($scope.redScore === 0) {
            $scope.redScore = redService.reset();
        }
    }   
    
    $scope.redPress = function () {
        $scope.redScore = redService.increment();
        $scope.blueScore = blueService.decrement();
        if($scope.blueScore === 0) {
            $scope.blueScore = blueService.reset();
        }
    }
    
}])