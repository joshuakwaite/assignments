var input = $(".table")
var appendThis = $(".pokemon")
var nextRow;
generateTable();

$.get("http://pokeapi.co/api/v1/pokedex/1/", function (x) {

    for (var j = 0; j < 3; j++) {
        input.append(`<tr>
<td> test </td> </tr>`)
    }

    for (var i = 0; i < x.pokemon.length; i++) {

    }

})
