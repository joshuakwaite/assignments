var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
        console.log(data)
        for (var i = 0; i < data.objects[0].pokemon.length; i++) {
            
            document.getElementById("pokemon-name").innerHTML +=
                `<p>This pokemon's name is ${data.objects[0].pokemon[i].name}.</p>`
        }
    }
}

xhr.open("GET", "http://api.vschool.io:6543/pokemon.json");
xhr.send();