var app = angular.module("myApp");

app.controller("dashboardController", ["$scope", "httpService", function($scope, httpService){

    getApi();

    function getApi() {
        httpService.getApi().then(function(response) {
            $scope.applications = response.data
        });
    };

}]);