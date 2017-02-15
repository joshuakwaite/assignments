var app = angular.module("myApp", []);

app.controller("mainController", ["$scope", "httpService", function ($scope, httpService) {



    getApi();

    function getApi() {
        httpService.getApi().then(function (response) {
            $scope.output = response.data
        })
    }

    $scope.newPost = function (newBounty) {
        httpService.postApi(newBounty).then(function (response) {
            $scope.output = response.data
            $scope.newBounty = {}
        })
    }

    $scope.newPut = function (singleBounty, index) {
        singleBounty.edit = false;
        httpService.putApi(singleBounty, index).then(function (response) {
            console.log(response.data);
            getApi();
        })
    }

    $scope.deleteApi = function (bounty) {
        httpService.deleteApi(bounty).then(function (response) {
            console.log(response.data)
            getApi();
        })
    }


}])