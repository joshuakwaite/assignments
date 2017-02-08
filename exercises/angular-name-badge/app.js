var app = angular.module("myApp",[]);

app.controller("mainController",function($scope) {
    
    $scope.addPerson = function() {
        
        $scope.person = []
        
        $scope.person.push($scope.newPerson)
        $scope.newPerson = {};
        
    }
    
    
    
})