angular.module("myApp",[])

.controller("mainController", ["$scope", "$http", "httpServices", function($scope, $http, httpServices) {
    
    
   
    
    $scope.buttonClicked = function (inputSentence) {
        if ($scope.inputSentence !== undefined) {
        $scope.output = "Loading..."
       httpServices.yodaFunction(inputSentence).then(function(response){
           console.log(response)
           $scope.output = response.data
       })
    } else {
        $scope.output = "Please enter text into the input box!"
    }
        delete $scope.inputSentence
    }
    
    
}]);