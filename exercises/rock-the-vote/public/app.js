var app = angular.module("myApp", ["ngAnimate"]);

app.controller("mainController", ["$scope", "httpService", function ($scope, httpService) {

    getApi();

    $scope.clickUp = function(x) {
        x.votes += 1
        httpService.putApi(x).then(function(response) {
            console.log(response);
            getApi();
        });
    }
    
     $scope.clickDown = function(x) {
        x.votes -= 1
        httpService.putApi(x).then(function(response) {
            console.log(response);
            getApi();
        });
    }
    
     $scope.addComment = function(x, newComment) {
         x.comments.push(newComment)
        x.togComments = true

         httpService.putApi(x).then(function(response){
             console.log(response);
             getApi();
             
         })
     }
     
    function getApi() {
        httpService.getApi().then(function (response) {
            $scope.output = response.data
        });
    }


    $scope.addPost = function (newPost) {
        newPost.toggleNewPost = false
        httpService.postApi(newPost).then(function (response) {
            console.log(response)
            getApi();
            $scope.newPost = {}
        }, function (response) {
            console.log("Well, that didn't work.")
        });
    }

    $scope.editPost = function (id) {
        id.toggleEditPost = false
        httpService.putApi(id).then(function (response) {
            console.log(response);
            $scope.x = {}
            getApi();
        });
    }

    $scope.deletePost = function (id) {
        httpService.deleteApi(id).then(function (response) {
            console.log(response)
            getApi();
        });
    }

}]);