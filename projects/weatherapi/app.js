var app = angular.module("myApp", ["angular-skycons", "ngRoute"]);



app.config(["$routeProvider", function ($routeProvider) {

    $routeProvider
        .when("/:day/:areacode", {
            templateUrl: "components/day-view/day-view.html",
            controller: "mainController"
        })
        .otherwise({
            redirectTo: "/Today/84606"
        });
    
        
}]);

