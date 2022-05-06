const contenedor = document.getElementById("contenido-principal");
const url = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosMorena.json";
const uri = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/"

let UbicaciónInserción = document.getElementById("MostrarDiputados").innerHTML; //Propio: Identificar div de inserción
var index;


fetch(url).then(function(respuesta)
{
    return respuesta.json();
}
).then(function(datos){

    UbicaciónInserción.innerHTML +=  "<div class='MuestraDiputado'><p>"+      "</p></div>";
    index = 1;



    UbicaciónInserción.innerHTML +=  "<div><p>"+datos[index]["número"]+" "+datos[index]["nombre"]+" "+datos[index]["apellidoPaterno"]+" "+datos[index]["apellidoMaterno"]+"del estado de "+datos[index]["entidad"]+"de "+datos[index]["distrito_circunscripcion"]+" de la bancada de "+datos[index]["partido"]+"</p></div>";


    console.log(datos);
    for(let i = 0; i < datos.length; i++)
    {
        UbicaciónInserción.innerHTML +=  "<div class='poster'><img src='"+uri+datos[i]["imagen"]+"'><h3>"+datos[i]["nombre"]+"</h3><div></div>";
    }
}
).catch(function(error)
{
    console.log(error);
});


