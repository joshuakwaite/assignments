angular.module("myApp",[])

.controller("mainController", ["$scope", "$http", function($scope, $http) {
    
    
    var config = {
        headers: {
            'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
        }
    };
    
    $scope.buttonClicked = function () {
        $scope.output = "Loading..."
    $http.get("https://yoda.p.mashape.com/yoda?sentence=" + $scope.inputSentence, config).then(function(response){
        $scope.output = response.data
    }, function(response){
        $scope.output = "Sorry, this service is temporarily unavaliable. Please try again later."
    })
    }
}]);