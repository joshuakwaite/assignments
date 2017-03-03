var app = angular.module("myApp");

app.controller("modalController", ["$scope", "close", function($scope, close) {

    $scope.dismissModal = function(result) {
        close(result, 200); // close, but give 200ms for bootstrap to animate
    };

}]);