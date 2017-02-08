angular.module("myApp",[])

.controller("mainController", ["$scope", "pokeService", function($scope, pokeService) {
    
    $scope.addPokemon = function (name) {
        $scope.output = pokeService.addPokemon(name)
    }
    
    $scope.deletePokemon = function (name) {
        $scope.output = pokeService.deletePokemon(name)
    }
    
}]);