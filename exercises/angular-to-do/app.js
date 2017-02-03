var app = angular.module("myApp", []);

app.controller("mainController", ["$scope", "$http", function ($scope, $http) {


    $http.get("http://api.vschool.io/joshuawaite/todo").then(function (response) {
        $scope.todoList = response.data
    });

   $scope.items = [
       {done:false},
       {done:false},
       {done:false},
       {done:false},
   ]
    
   $scope.editTodo = function(index) {
       $scope.todoList.splice(index,1,$scope.newTodo)
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