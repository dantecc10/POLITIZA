const contenedor = documento.getElementByID("contenido-principal");

const url_DMorena = "https://https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosMorena.json";
const url_DPAN = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosPAN.json";
const url_DPRI = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosPRI.json";
const url_DPVEM = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosPVEM.json";
const url_DPT = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosPT.json";
const url_DMC = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosMC.json";
const url_DPRD = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosPRD.json";
const url_DApartidistas = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosApartidistas.json";

const url_general = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/";

fetch(url).then(function(respuesta)
{
    return respuesta.json();
}).then(function(datos)
{
    console.log(datos);
    for (let i = 0; i < datos.length; i++)
    {
        contenedor.innerHTML += "<div class='poster'><img src'"+url_general+datos[i]["imagen"]+"'><h3>"+datos[i]["nombre"]+"</h3></div>";
    }
}).catch(function(error)
    {
        console.log(error);
    });

