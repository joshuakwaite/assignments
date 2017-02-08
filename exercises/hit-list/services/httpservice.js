angular.module("myApp")

.service("httpService", ["$http", function($http) {
    
   
    
    
    this.getHitlist = function () {
     return $http.get("http://api.vschool.io:6543/hitlist.json")
    .then(function (response) {
        return response.data
    });
    
        }
    
}])