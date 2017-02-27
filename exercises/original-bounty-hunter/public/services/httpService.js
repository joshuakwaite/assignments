var app = angular.module("myApp");

app.service("httpService", ["$http", function($http) {
    
    this.getApi = function () {
        return $http.get("/bounties")
    }
    
    this.postApi = function (newBounty) {
        return $http.post("/bounties", newBounty)
    }
    
    this.putApi = function(singleBounty, index) {
        return $http.put("/bounties/" + singleBounty._id, singleBounty)
    }
    
    this.deleteApi = function(singleBounty) {
        return $http.delete("/bounties/" + singleBounty._id)
    }
    
}])