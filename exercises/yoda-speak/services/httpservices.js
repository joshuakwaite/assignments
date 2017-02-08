angular.module("myApp")

.service("httpServices", ["$http", function($http) {
    
     var config = {
        headers: {
            'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
        }
    };
    
    
    this.yodaFunction = function (inputSentence) {
   return $http.get("https://yoda.p.mashape.com/yoda?sentence=" +inputSentence, config)
    }
    
    
}])
