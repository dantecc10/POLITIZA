
const url = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosMorena.json";
const uri = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/"

let UbicaciónInserción = document.getElementById("MostrarDiputados"); //Propio: Identificar div de inserción
var index;


fetch(url).then(function(respuesta)
{
    return respuesta.json();
}
).then(function(Diputado1){

    index = 1;
    UbicaciónInserción.innerHTML = "Soy Dante";
    UbicaciónInserción.innerHTML =  "<p>"+Diputado1[index]["número"]+" "+Diputada1[index]["nombre"]+" "+Diputada1[index]["apellidoPaterno"]+" "+Diputada1[index]["apellidoMaterno"]+"del estado de "+Diputada1[index]["entidad"]+"de "+Diputada1[index]["distrito_circunscripcion"]+" de la bancada de "+Diputada1[index]["partido"]+"</p>";


    console.log(Diputada1);
    for(let i = 0; i < Diputada1.length; i++)
    {
        UbicaciónInserción.innerHTML +=  "<div class='poster'><img src='"+uri+Diputada1[i]["imagen"]+"'><h3>"+Diputada1[i]["nombre"]+"</h3><div></div>";
    }
}
).catch(function(error)
{
    console.log(error);
});


