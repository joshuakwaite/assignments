var app = angular.module("myApp")

app.controller("homeController", ["$scope", "ponyService", function ($scope, ponyService) {

    getList();

    function getList() {
        ponyService.getApi().then(function (response) {
            console.log(response);
            $scope.ponies = response.data
        });
    };

    $scope.newPony = function (pony) {
        $scope.submitForm = false
        ponyService.addPony(pony).then(function (response) {
            console.log(response);
            getList()
        });

    };

    $scope.changePony = function(pony) {
        ponyService.changePony(pony).then(function (response) {
            console.log(response);
            getList();
        });
    };

    $scope.deletePony = function(pony) {
        ponyService.deletePony(pony).then(function (response) {
            console.log(response);
            getList();
        })
    }

}]);