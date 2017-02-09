var app = angular.module("myApp", ["angular-skycons"]);

app.controller("mainController", ["$scope", "httpService", function ($scope, httpService) {


    $scope.lookupLocation = function (location) {



        httpService.getLocation(location).then(function (response) {
            var latAndLng = response.data.results[0].geometry.location.lat + "," + response.data.results[0].geometry.location.lng
            delete $scope.locationLookup

            httpService.getWeather(latAndLng).then(function (response) {
                var weather = response.data


                $scope.output = weather.currently
                $scope.output.color = {
                    red: "red",
                    blue: "blue",
                    white: "white",
                }
                $scope.currentTime = weather.currently.time * 1000;
                $scope.hourly = weather.hourly.data
                $scope.forecast = weather.daily

                $scope.quantity = 6

                console.log(weather.currently.icon)
            })
        })
    }
}])

//.config(["$routeProvider", function ($routeProvider) {
//
//    $routeProvider
//        .when("/home", {
//            templateUrl: "components/home/home.html",
//            controller: "homeController"
//        })
//        .when("/about", {
//            templateUrl: "components/about/about.html",
//            controller: "aboutController"
//        })
//        .when("/whyilove", {
//            templateUrl: "components/whyilove/whyilove.html",
//            controller: "whyiloveController"
//        })
//        .otherwise({
//            redirectTo: "/home"
//        });
//}]);
//
//  
//