var app = angular.module("myApp");

app.controller("mainController", ["$scope", "httpService", "$routeParams", function ($scope, httpService, $routeParams) {


    
    var location = $routeParams.areacode

    httpService.getLocation($routeParams.areacode).then(function (response) {
        var latAndLng = response.data.results[0].geometry.location.lat + "," + response.data.results[0].geometry.location.lng
        delete $scope.locationLookup

        httpService.getWeather(latAndLng).then(function (response) {
            var weather = response.data

            if ($routeParams.day === "Today") {
                $scope.output = weather.currently
            } else {

                var date = new Date()

                var today = date.getDay()
                var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                var day = daysOfTheWeek.indexOf($routeParams.day)

                $scope.whatDay = $routeParams.day

                //if statement goes here to reset day on sunday
                $scope.output = weather.daily.data[day - today]


            }



            $scope.output.color = {
                red: "red",
                blue: "blue",
                white: "white",
            }
            $scope.hourly = weather.hourly.data
            $scope.forecast = weather.daily

            $scope.quantity = 6

        })
    })
}])