var app = angular.module("myApp", []);

app.controller("mainController", ["$scope", "$http", function ($scope, $http) {

//    $scope.isToggle = false;
    
    $http.get("http://api.vschool.io/joshuawaite/todo").then(function (response) {
        $scope.todoList = response.data
    });


    $scope.pictureClicked = function (x, picture) {
       x.picture = picture;
        
        
        x.isToggle = false;
//        $scope.picturePerfect.push($scope.picture)
        
    }
    

    $scope.clickCompleted = function(singleTodo, index) {
        $http.put("http://api.vschool.io/joshuawaite/todo/" + singleTodo._id, singleTodo).then(function(response) {
            console.log(response)
        })
    }

    
    
    $scope.editTodo = function (singleTodo, index) {
        $http.put("http://api.vschool.io/joshuawaite/todo/" + singleTodo._id, $scope.newTodo).then(function (response) {
            console.log(response)
            $scope.todoList.splice(index, 1, response.data)
        })
    }

    $scope.addTodo = function () {
        $http.post("http://api.vschool.io/joshuawaite/todo", $scope.newTodo).then(function (response) {
            $scope.todoList.push(response.data)
            $scope.newTodo = {}
        })

    }

    $scope.deleteTodo = function (singleTodo, index) {

        $http.delete("http://api.vschool.io/joshuawaite/todo/" + singleTodo._id).then(function (response) {
            $scope.todoList.splice(index, 1)
            console.log("Your todo was deleted!")
        }, function (response) {
            console.log("There was a problem deleting your todo!")
        })

    }

}]);