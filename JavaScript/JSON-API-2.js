const contenedor = document.getElementById("contenido-principal");
const url = "D:/MEGA/MEGA CLOUD/DANTE/ACADÉMICO/Grupo-1-API/Grupo-1-API/base_datos.json";
const uri = "D:/MEGA/MEGA CLOUD/DANTE/ACADÉMICO/Grupo-1-API/Grupo-1-API/"

fetch(url).then(function(respuesta)
{
    return respuesta.json();
}
).then(function(datos){
    console.log(datos);
    for(let i = 0; i < datos.length; i++)
    {
        contenedor.innerHTML +=  "<div class='poster'><img src='"+uri+datos[i]["imagen"]+"'><h3>"+datos[i]["nombre"]+"</h3><div></div>";
    }
}
).catch(function(error)
{
    console.log(error);
});