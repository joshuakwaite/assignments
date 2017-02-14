var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/index.html', {
            redirectTo: '/home',
            templateUrl: '/index.html'
        })
        .when('/wishone', {
            templateUrl: 'public/directives/wish-one/wish-one.html',
            controller: 'wishOneController'
        })
        .when('/wishtwo', {
            templateUrl: 'public/directives/wish-two/wish-two.html',
            controller: 'wishTwoController'
        })
        .otherwise({
            redirectTo: '/index.html'
        })
});