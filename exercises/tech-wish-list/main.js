var app = angular.module("myApp");

app.config(function($routeProvider) {
    $routeProvider
    .when('/home', {
        redirectTo: '/home',
        templateUrl: '/index.html'
    })
    .otherwise({
        redirectTo: '/home'
    })
    
})

app.controller("homeController", ["$scope", function($scope) {
    
    
}])