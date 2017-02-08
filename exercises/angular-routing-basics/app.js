angular.module("routingApp", ["ngRoute"])

.config(["$routeProvider", function ($routeProvider) {

    $routeProvider
        .when("/home", {
            templateUrl: "components/home/home.html",
            controller: "homeController"
        })
        .when("/about", {
            templateUrl: "components/about/about.html",
            controller: "aboutController"
        })
        .when("/whyilove", {
            templateUrl: "components/whyilove/whyilove.html",
            controller: "whyiloveController"
        })
        .otherwise({
            redirectTo: "/home"
        });
}]);