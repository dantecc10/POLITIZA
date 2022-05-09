let url = "https://pokeapi.co/api/v2/pokemon/pikachu";

fetch(url).then(function(response){
    //Lógica de éxito
    return response.json();
}).then(function(data){
    //Lógica de éxito con JSON
    //nombre = document.getElementById("nombre");
    console.log(data["name"]);
}).catch(function(error){
    //Lógica de error
    console.log("Error: ", error);
});



if (data[i]["entidad"] == "Puebla") {
    console.log(data[i]["número"], " ", data[i]["nombre"], " ", data[i]["apellidoPaterno"], " ", data[i]["apellidoMaterno"], " es poblano.");
}