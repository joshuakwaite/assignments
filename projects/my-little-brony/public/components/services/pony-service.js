var app = angular.module("myApp")

app.service("ponyService", ["$http", function($http) {


    this.getApi = function () {
        return $http.get("http://api.vschool.io/joshuawaite/pony")
    }

     this.addPony = function (pony) {
        if (ponyValidator(pony)) {
            return $http.post("http://api.vschool.io/joshuawaite/pony", pony)
        } else {
            return console.log("there has been an error")
        }

    }

     this.removePony = function (pony) {
        return $http.delete("http://api.vschool.io/joshuawaite/pony", pony._id)
    }

     this.changePony = function (pony) {
        return $http.post("http://aptermi.vschool.io/joshuawaite/pony", pony._id, pony)
    }

     var ponyValidator = function (incoming) {
         if (incoming === undefined) {
             console.log("incoming error")
             return false
         } else if (incoming.name === undefined) {
             console.log("incoming.name error")
             return false
         } else if (incoming.username === undefined) {
             console.log("incoming.username error")
             return false
         } else if (incoming.imgUrl === undefined) {
             console.log("incoming.imgUrl error")
             return false
         } else if (incoming.name.length < 3) {
             console.log("incoming.name.length error")
            return false
        } else {
            return true
        }
    }

}])
