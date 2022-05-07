const url_DMorena = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosMorena.json";

fetch(url_DMorena).then(function(response){
    //Lógica de éxito
    return response.json();
}).then(function(data){
    //Lógica de éxito con JSON
    //nombre = document.getElementById("nombre");
    for(var i=1; i!=data.length; i++)
    {
        console.log("Diputad@ ", data[i]["número"], " ", data[i]["nombre"], " ", data[i]["apellidoPaterno"], " ", data[i]["apellidoMaterno"], " del Estado de ", data[i]["entidad"], " que representa al (a la) ", data[i]["distrito_circunscripcion"]);
    }    
}).catch(function(error){
    //Lógica de error
    console.log("Error: ", error);
});