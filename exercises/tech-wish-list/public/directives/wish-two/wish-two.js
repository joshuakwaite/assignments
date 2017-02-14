var app = angular.module("myApp");



app.controller("wishTwoController", ["$scope", function ($scope) {

    $scope.coolStuff = [
        {
            image: "https://cdn.macrumors.com/article-new/2016/05/iphoneconceptimage.jpg",
            name: "iPhone 8",
            price: "$900.00",
        },
        {
            image: "https://cdn.arstechnica.net/wp-content/uploads/sites/3/2016/10/macbook-pro-new.jpg",
            name: "Macbook Pro",
            price: "$3,000.00",
        }]

            }])