var app = angular.module("myApp");



app.controller("wishOneController", ["$scope", function ($scope) {

                  $scope.coolTech = [
                {
                    image: "http://blogs-images.forbes.com/johnarcher/files/2014/08/SamsungUE65HU8500AngleLeft1.jpg?width=960",
                    name: "Nice TV",
                    price: "$5,000.00",
        },
                {
                    image: "https://s3-ap-southeast-1.amazonaws.com/cloud-skcript/wp-content/uploads/2014/05/25090337/robots.jpg",
                    name: "Best Friend Robot",
                    price: "$10,000.00",
        }]
                  

}])