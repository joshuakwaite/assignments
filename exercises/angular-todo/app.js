var app = angular.module("myApp", []);

app.controller("mainController", ["$scope", "$http", "httpService", function ($scope, $http, httpService) {

    
    httpService.getApi().then(function (response) {
        $scope.todoList = response.data
    });


    $scope.pictureClicked = function (x, picture) {
       x.picture = picture;
        x.isToggle = false;
    }
    

    $scope.clickCompleted = function(singleTodo, index) {
        httpService.completed(singleTodo, index).then(function(response) {
        })
    }

    
    
    $scope.editTodo = function (singleTodo, index, whatToPut) {
        httpService.edit(singleTodo, index, whatToPut).then(function (response) {
            $scope.todoList.splice(index, 1, response.data)
        })
    }

    $scope.addTodo = function (whatToPost) {
        httpService.add(whatToPost).then(function (response) {
            console.log(response)
            $scope.todoList.push(response.data)
            $scope.newTodo = {}
        })

    }

    $scope.deleteTodo = function (singleTodo, index) {

       httpService.delete(singleTodo, index).then(function (response) {
            $scope.todoList.splice(index, 1)
            console.log("Your todo was deleted!")
        }, function (response) {
            console.log("There was a problem deleting your todo!")
        })

    }

}]);