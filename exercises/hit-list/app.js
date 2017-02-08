var app = angular.module("myApp", []);

app.controller(`myController`, ["$scope", "$http", "httpService", function ($scope, $http, httpService) {
    
    httpService.getHitlist().then(function(stuff){
       $scope.hitlist =  stuff
    });
    
}]);