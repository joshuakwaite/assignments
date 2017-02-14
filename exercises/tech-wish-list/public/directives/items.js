var app = angular.module("myApp");


app.directive("favoriteItems", [function () {
    return {
        templateUrl: 'public/directives/items.html',
        scope: {
            item: "="
        },
        restrict: "E",
    }
}])






//
//angular.module("myApp")
//
//.directive("contactCard", [function () {
//    return {
//        templateUrl: "directives/contact-card/contact-card.html",
//        scope: {
//            person: "="
//        },
//        restrict: "E",
//        controller: function () {
//            // Useful if you need one directive to talk to another directive
//        },
//        link: function (scope, elem, attrs) {
//            scope.person.isAHappyPerson = false;
//            console.log(scope);
//        }
//    }
//}]);