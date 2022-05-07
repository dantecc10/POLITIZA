let url = "https://pokeapi.co/api/v2/pokemon/charizard";

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