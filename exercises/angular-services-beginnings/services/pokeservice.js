angular.module("myApp")

.service("pokeService", [function () {

    var pokeList = [];


    this.addPokemon = function (name) {
        pokeList.push(name)
        return pokeList
    };

    this.deletePokemon = function (name) {
        if(pokeList.indexOf(name) !== -1) {
        pokeList.splice(pokeList.indexOf(name),1)
        return pokeList
        } else {
            return pokeList
        }
    };

}]);