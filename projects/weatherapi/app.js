var app = angular.module("myApp", []);

app.controller("mainController", ["$scope", "httpService",  function ($scope, httpService) {


    $scope.lookupLocation = function (location) {



        httpService.getLocation(location).then(function (response) {
            var latAndLng = response.data.results[0].geometry.location.lat + "," + response.data.results[0].geometry.location.lng
            delete $scope.locationLookup

            httpService.getWeather(latAndLng).then(function (response) {
                var weather = response.data


                $scope.output = weather.currently
                $scope.currentTime = weather.currently.time * 1000;
                $scope.hourly = weather.hourly.data
                $scope.forecast = weather.daily

                $scope.quantity = 6
                
                console.log(weather.currently.icon)
            })
        })
    }
    

  var icons = new Skycons({"color": "red"});

icons.set("clear-day", Skycons.CLEAR_DAY);
icons.set("clear-night", Skycons.CLEAR_NIGHT);
icons.set("partly-cloudy-day", Skycons.PARTLY_CLOUDY_DAY);
icons.set("partly-cloudy-night", Skycons.PARTLY_CLOUDY_NIGHT);
icons.set("cloudy", Skycons.CLOUDY);
icons.set("rain", Skycons.RAIN);
icons.set("sleet", Skycons.SLEET);
icons.set("snow", Skycons.SNOW);
icons.set("wind", Skycons.WIND);
icons.set("fog", Skycons.FOG);

icons.play();



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
