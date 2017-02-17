var app = angular.module("myApp");

app.service("httpService", ["$http", function($http){
    
    this.getApi = function() {
        return $http.get("/issues")
    }
    
    this.postApi = function(newPost) {
        return $http.post("/issues", newPost)
    }
    
    this.putApi = function(id) {
        console.log(id)
        return $http.put("/issues/" + id.id, id)
    }
    
    this.deleteApi = function(id) {
        return $http.delete("/issues/" + id.id)
    }
    
}])