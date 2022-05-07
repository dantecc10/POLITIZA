
const url = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosMorena.json";
const uri = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/"

let UbicaciónInserción = document.getElementById("MostrarDiputados"); //Propio: Identificar div de inserción
var index;


fetch(url).then(function(respuesta)
{
    return respuesta.json();
}
).then(function(DiputadosMorena){

    index = 1;
    UbicaciónInserción.innerHTML = "Soy Dante";
    UbicaciónInserción.innerHTML =  "<p>"+DiputadosMorena[index]["número"]+" "+DiputadosMorena[index]["nombre"]+" "+DiputadosMorena[index]["apellidoPaterno"]+" "+DiputadosMorena[index]["apellidoMaterno"]+"del estado de "+DiputadosMorena[index]["entidad"]+"de "+DiputadosMorena[index]["distrito_circunscripcion"]+" de la bancada de "+DiputadosMorena[index]["partido"]+"</p>";


    console.log(DiputadosMorena);
    for(let i = 0; i < DiputadosMorena.length; i++)
    {
        UbicaciónInserción.innerHTML +=  "<div class='poster'><img src='"+uri+DiputadosMorena[i]["imagen"]+"'><h3>"+DiputadosMorena[i]["nombre"]+"</h3><div></div>";
    }
}
).catch(function(error)
{
    console.log(error);
});


