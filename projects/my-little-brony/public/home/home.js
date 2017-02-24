var app = angular.module("myApp")

app.controller("homeController", ["$scope", "ponyService", function($scope, ponyService) {

    $scope.ponies = ponyService.getPonyList()

    $scope.alert = function() {
        alert("test")
    }

}])