angular.module("myApp")

.service("httpService", ["$http", function($http) {
    
   this.getApi = function() {
    return $http.get("http://api.vschool.io/joshuawaite/todo")
    }
   
   this.completed = function(singleTodo, index) {
      return $http.put("http://api.vschool.io/joshuawaite/todo/" + singleTodo._id, singleTodo)
   }
   
   this.edit = function(singleTodo, index, whatToPut) {
      return $http.put("http://api.vschool.io/joshuawaite/todo/" + singleTodo._id, whatToPut)
   }
   
   this.add = function(whatToPost) {
       return $http.post("http://api.vschool.io/joshuawaite/todo", whatToPost)
   }
   
   this.delete = function(singleTodo, index) {
       return  $http.delete("http://api.vschool.io/joshuawaite/todo/" + singleTodo._id)
   }
   
   
   
}])

