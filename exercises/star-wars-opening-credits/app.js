angular.module("myApp", [])

.controller("mainController", ["$scope", "$http", function ($scope, $http) {

    $http.get("http://swapi.co/api/films/1").then(function (response) {
        console.log(response)
        $scope.crawl = response.data.opening_crawl
        
    })




}])