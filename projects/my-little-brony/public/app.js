var app = angular.module("myApp", ["ngRoute"])

app.config(["$routeProvider", function($routeProvider){

        $routeProvider
            .when("/home", {
            templateUrl: "public/home/home.html",
            controller: "homeController"
        })
            .otherwise({
                redirectTo: "/home"
            })
}])