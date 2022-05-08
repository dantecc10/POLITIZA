function búsquedaMorena() {
    const url_DMorena = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosMorena.json";

    fetch(url_DMorena).then(function (response) {
        //Lógica de éxito
        return response.json();
    }).then(function (data) {
        //Lógica de éxito con JSON
        //nombre = document.getElementById("nombre");
        for (var i = 1; i != data.length; i++) {
            console.log("Diputad@ ", data[i]["número"], ".- ", data[i]["nombre"], " ", data[i]["apellidoPaterno"], " ", data[i]["apellidoMaterno"], " del Estado de ", data[i]["entidad"], " que representa al (a la) ", data[i]["distrito_circunscripcion"], "que representa a ", data[i]["partido"]);
            document.getElementById("ListaDinámica").innerHTML+=("<li>"+data[i]["nombre"]+ " "+ data[i]["apellidoPaterno"]+ " "+ data[i]["apellidoMaterno"]+ " del Estado de "+ data[i]["entidad"]+ " que representa al (a la) "+ data[i]["distrito_circunscripcion"]+ " que representa a "+ data[i]["partido"]+"</li>");
            /*if (data[i]["entidad"] == "Puebla") {
                console.log(data[i]["número"], " ", data[i]["nombre"], " ", data[i]["apellidoPaterno"], " ", data[i]["apellidoMaterno"], " es poblano.");
            }*/
            document.getElementById("InsertarResultados").innerHTML+=("<tr>"+"<td>"+data[i]["número"]+"</td>"+"<td>"+data[i]["nombre"]+" "+data[i]["apellidoPaterno"]+" "+data[i]["apellidoMaterno"]+"</td>"+"<td>"+data[i]["partido"]+"</td>"+"<td>"+data[i]["entidad"]+"</td>"+"<td>"+data[i]["distrito_circunscripcion"]+"</td>");
        }
    }).catch(function (error) {
        //Lógica de error
        console.log("Error: ", error);
    });
}
function búsquedaPAN() {
    const url_DPAN = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosPAN.json";

    fetch(url_DPAN).then(function (response) {
        //Lógica de éxito
        return response.json();
    }).then(function (data) {
        //Lógica de éxito con JSON
        //nombre = document.getElementById("nombre");
        for (var i = 1; i != data.length; i++) {
            console.log("Diputad@ ", data[i]["número"], ".- ", data[i]["nombre"], " ", data[i]["apellidoPaterno"], " ", data[i]["apellidoMaterno"], " del Estado de ", data[i]["entidad"], " que representa al (a la) ", data[i]["distrito_circunscripcion"], "que representa a ", data[i]["partido"]);
            document.getElementById("ListaDinámica").innerHTML+=("<li>"+data[i]["nombre"]+ " "+ data[i]["apellidoPaterno"]+ " "+ data[i]["apellidoMaterno"]+ " del Estado de "+ data[i]["entidad"]+ " que representa al (a la) "+ data[i]["distrito_circunscripcion"]+ " que representa a "+ data[i]["partido"]+"</li>");
            /*if (data[i]["entidad"] == "Puebla") {
                console.log(data[i]["número"], " ", data[i]["nombre"], " ", data[i]["apellidoPaterno"], " ", data[i]["apellidoMaterno"], " es poblano.");
            }*/
            document.getElementById("InsertarResultados").innerHTML+=("<tr>"+"<td>"+data[i]["número"]+"</td>"+"<td>"+data[i]["nombre"]+" "+data[i]["apellidoPaterno"]+" "+data[i]["apellidoMaterno"]+"</td>"+"<td>"+data[i]["partido"]+"</td>"+"<td>"+data[i]["entidad"]+"</td>"+"<td>"+data[i]["distrito_circunscripcion"]+"</td>");
        }
    }).catch(function (error) {
        //Lógica de error
        console.log("Error: ", error);
    });
}
function búsquedaPRI() {
    const url_DPRI = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosPRI.json";

    fetch(url_DPRI).then(function (response) {
        //Lógica de éxito
        return response.json();
    }).then(function (data) {
        //Lógica de éxito con JSON
        //nombre = document.getElementById("nombre");
        for (var i = 1; i != data.length; i++) {
            console.log("Diputad@ ", data[i]["número"], ".- ", data[i]["nombre"], " ", data[i]["apellidoPaterno"], " ", data[i]["apellidoMaterno"], " del Estado de ", data[i]["entidad"], " que representa al (a la) ", data[i]["distrito_circunscripcion"], "que representa a ", data[i]["partido"]);
            document.getElementById("ListaDinámica").innerHTML+=("<li>"+data[i]["nombre"]+ " "+ data[i]["apellidoPaterno"]+ " "+ data[i]["apellidoMaterno"]+ " del Estado de "+ data[i]["entidad"]+ " que representa al (a la) "+ data[i]["distrito_circunscripcion"]+ " que representa a "+ data[i]["partido"]+"</li>");
            /*if (data[i]["entidad"] == "Puebla") {
                console.log(data[i]["número"], " ", data[i]["nombre"], " ", data[i]["apellidoPaterno"], " ", data[i]["apellidoMaterno"], " es poblano.");
            }*/
            document.getElementById("InsertarResultados").innerHTML+=("<tr>"+"<td>"+data[i]["número"]+"</td>"+"<td>"+data[i]["nombre"]+" "+data[i]["apellidoPaterno"]+" "+data[i]["apellidoMaterno"]+"</td>"+"<td>"+data[i]["partido"]+"</td>"+"<td>"+data[i]["entidad"]+"</td>"+"<td>"+data[i]["distrito_circunscripcion"]+"</td>");
        }
    }).catch(function (error) {
        //Lógica de error
        console.log("Error: ", error);
    });
}
function búsquedaPVEM() {
    const url_DPVEM = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosPVEM.json";

    fetch(url_DPVEM).then(function (response) {
        //Lógica de éxito
        return response.json();
    }).then(function (data) {
        //Lógica de éxito con JSON
        //nombre = document.getElementById("nombre");
        for (var i = 1; i != data.length; i++) {
            console.log("Diputad@ ", data[i]["número"], ".- ", data[i]["nombre"], " ", data[i]["apellidoPaterno"], " ", data[i]["apellidoMaterno"], " del Estado de ", data[i]["entidad"], " que representa al (a la) ", data[i]["distrito_circunscripcion"], "que representa a ", data[i]["partido"]);
            document.getElementById("ListaDinámica").innerHTML+=("<li>"+data[i]["nombre"]+ " "+ data[i]["apellidoPaterno"]+ " "+ data[i]["apellidoMaterno"]+ " del Estado de "+ data[i]["entidad"]+ " que representa al (a la) "+ data[i]["distrito_circunscripcion"]+ " que representa a "+ data[i]["partido"]+"</li>");
            /*if (data[i]["entidad"] == "Puebla") {
                console.log(data[i]["número"], " ", data[i]["nombre"], " ", data[i]["apellidoPaterno"], " ", data[i]["apellidoMaterno"], " es poblano.");
            }*/
            document.getElementById("InsertarResultados").innerHTML+=("<tr>"+"<td>"+data[i]["número"]+"</td>"+"<td>"+data[i]["nombre"]+" "+data[i]["apellidoPaterno"]+" "+data[i]["apellidoMaterno"]+"</td>"+"<td>"+data[i]["partido"]+"</td>"+"<td>"+data[i]["entidad"]+"</td>"+"<td>"+data[i]["distrito_circunscripcion"]+"</td>");
        }
    }).catch(function (error) {
        //Lógica de error
        console.log("Error: ", error);
    });
}
function búsquedaPT() {
    const url_DPT = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosPT.json";

    fetch(url_DPT).then(function (response) {
        //Lógica de éxito
        return response.json();
    }).then(function (data) {
        //Lógica de éxito con JSON
        //nombre = document.getElementById("nombre");
        for (var i = 1; i != data.length; i++) {
            console.log("Diputad@ ", data[i]["número"], ".- ", data[i]["nombre"], " ", data[i]["apellidoPaterno"], " ", data[i]["apellidoMaterno"], " del Estado de ", data[i]["entidad"], " que representa al (a la) ", data[i]["distrito_circunscripcion"], "que representa a ", data[i]["partido"]);
            document.getElementById("ListaDinámica").innerHTML+=("<li>"+data[i]["nombre"]+ " "+ data[i]["apellidoPaterno"]+ " "+ data[i]["apellidoMaterno"]+ " del Estado de "+ data[i]["entidad"]+ " que representa al (a la) "+ data[i]["distrito_circunscripcion"]+ " que representa a "+ data[i]["partido"]+"</li>");
            /*if (data[i]["entidad"] == "Puebla") {
                console.log(data[i]["número"], " ", data[i]["nombre"], " ", data[i]["apellidoPaterno"], " ", data[i]["apellidoMaterno"], " es poblano.");
            }*/
            document.getElementById("InsertarResultados").innerHTML+=("<tr>"+"<td>"+data[i]["número"]+"</td>"+"<td>"+data[i]["nombre"]+" "+data[i]["apellidoPaterno"]+" "+data[i]["apellidoMaterno"]+"</td>"+"<td>"+data[i]["partido"]+"</td>"+"<td>"+data[i]["entidad"]+"</td>"+"<td>"+data[i]["distrito_circunscripcion"]+"</td>");
        }
    }).catch(function (error) {
        //Lógica de error
        console.log("Error: ", error);
    });
}
function búsquedaMC() {
    const url_DMC = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosMC.json";

    fetch(url_DMC).then(function (response) {
        //Lógica de éxito
        return response.json();
    }).then(function (data) {
        //Lógica de éxito con JSON
        //nombre = document.getElementById("nombre");
        for (var i = 1; i != data.length; i++) {
            console.log("Diputad@ ", data[i]["número"], ".- ", data[i]["nombre"], " ", data[i]["apellidoPaterno"], " ", data[i]["apellidoMaterno"], " del Estado de ", data[i]["entidad"], " que representa al (a la) ", data[i]["distrito_circunscripcion"], "que representa a ", data[i]["partido"]);
            document.getElementById("ListaDinámica").innerHTML+=("<li>"+data[i]["nombre"]+ " "+ data[i]["apellidoPaterno"]+ " "+ data[i]["apellidoMaterno"]+ " del Estado de "+ data[i]["entidad"]+ " que representa al (a la) "+ data[i]["distrito_circunscripcion"]+ " que representa a "+ data[i]["partido"]+"</li>");
            /*if (data[i]["entidad"] == "Puebla") {
                console.log(data[i]["número"], " ", data[i]["nombre"], " ", data[i]["apellidoPaterno"], " ", data[i]["apellidoMaterno"], " es poblano.");
            }*/
            document.getElementById("InsertarResultados").innerHTML+=("<tr>"+"<td>"+data[i]["número"]+"</td>"+"<td>"+data[i]["nombre"]+" "+data[i]["apellidoPaterno"]+" "+data[i]["apellidoMaterno"]+"</td>"+"<td>"+data[i]["partido"]+"</td>"+"<td>"+data[i]["entidad"]+"</td>"+"<td>"+data[i]["distrito_circunscripcion"]+"</td>");
        }
    }).catch(function (error) {
        //Lógica de error
        console.log("Error: ", error);
    });
}

function búsquedaPRD() {
    const url_DPRD = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosPRD.json";

    fetch(url_DPRD).then(function (response) {
        //Lógica de éxito
        return response.json();
    }).then(function (data) {
        //Lógica de éxito con JSON
        //nombre = document.getElementById("nombre");
        for (var i = 1; i != data.length; i++) {
            console.log("Diputad@ ", data[i]["número"], ".- ", data[i]["nombre"], " ", data[i]["apellidoPaterno"], " ", data[i]["apellidoMaterno"], " del Estado de ", data[i]["entidad"], " que representa al (a la) ", data[i]["distrito_circunscripcion"], "que representa a ", data[i]["partido"]);
            document.getElementById("ListaDinámica").innerHTML+=("<li>"+data[i]["nombre"]+ " "+ data[i]["apellidoPaterno"]+ " "+ data[i]["apellidoMaterno"]+ " del Estado de "+ data[i]["entidad"]+ " que representa al (a la) "+ data[i]["distrito_circunscripcion"]+ " que representa a "+ data[i]["partido"]+"</li>");
            /*if (data[i]["entidad"] == "Puebla") {
                console.log(data[i]["número"], " ", data[i]["nombre"], " ", data[i]["apellidoPaterno"], " ", data[i]["apellidoMaterno"], " es poblano.");
            }*/
            document.getElementById("InsertarResultados").innerHTML+=("<tr>"+"<td>"+data[i]["número"]+"</td>"+"<td>"+data[i]["nombre"]+" "+data[i]["apellidoPaterno"]+" "+data[i]["apellidoMaterno"]+"</td>"+"<td>"+data[i]["partido"]+"</td>"+"<td>"+data[i]["entidad"]+"</td>"+"<td>"+data[i]["distrito_circunscripcion"]+"</td>");
        }
    }).catch(function (error) {
        //Lógica de error
        console.log("Error: ", error);
    });
}

function búsquedaApartidistas() {
    const url_DApartidistas = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosApartidistas.json";

    fetch(url_DApartidistas).then(function (response) {
        //Lógica de éxito
        return response.json();
    }).then(function (data) {
        //Lógica de éxito con JSON
        //nombre = document.getElementById("nombre");
        for (var i = 1; i != data.length; i++) {
            console.log("Diputad@ ", data[i]["número"], ".- ", data[i]["nombre"], " ", data[i]["apellidoPaterno"], " ", data[i]["apellidoMaterno"], " del Estado de ", data[i]["entidad"], " que representa al (a la) ", data[i]["distrito_circunscripcion"], "que representa a ", data[i]["partido"]);
            document.getElementById("ListaDinámica").innerHTML+=("<li>"+data[i]["nombre"]+ " "+ data[i]["apellidoPaterno"]+ " "+ data[i]["apellidoMaterno"]+ " del Estado de "+ data[i]["entidad"]+ " que representa al (a la) "+ data[i]["distrito_circunscripcion"]+ " que representa a "+ data[i]["partido"]+"</li>");
            /*if (data[i]["entidad"] == "Puebla") {
                console.log(data[i]["número"], " ", data[i]["nombre"], " ", data[i]["apellidoPaterno"], " ", data[i]["apellidoMaterno"], " es poblano.");
            }*/
            document.getElementById("InsertarResultados").innerHTML+=("<tr>"+"<td>"+data[i]["número"]+"</td>"+"<td>"+data[i]["nombre"]+" "+data[i]["apellidoPaterno"]+" "+data[i]["apellidoMaterno"]+"</td>"+"<td>"+data[i]["partido"]+"</td>"+"<td>"+data[i]["entidad"]+"</td>"+"<td>"+data[i]["distrito_circunscripcion"]+"</td>");
        }
    }).catch(function (error) {
        //Lógica de error
        console.log("Error: ", error);
    });
}

function leerPartido() {
    document.getElementById("ListaDinámica").innerHTML=("");

    
    var índiceSeleccionadoPartido;

    //var x = document.getElementById("Lista3").textContent.toString[0]; //No funciona ni en consola
    //console.log("Imprimir 'x': '"+x+"'.");

    
    
    /*¡Éxito!*/ console.log(document.getElementsByTagName("select").Partido.selectedOptions[0].outerText); //Esto en consola devuelve el partido elegido ej.: 'PVEM'
    nuevaVar=(document.getElementsByTagName("select").Partido.selectedOptions[0].outerText);

    /*¡Éxito!*/ console.log("Hola");

    

    var stringSeleccionadoPartido = document.getElementById("Lista3").options[document.getElementById("Lista3").selectedIndex].text;
    /*¡Éxito!*/ console.log(stringSeleccionadoPartido); //Esto en consola escribe la devolución del partido elegido ej.: 'PVEM'

    var valorSeleccionadoPartido = document.getElementById("Lista3").options[document.getElementById("Lista3").selectedIndex].value;

    
    //índiceSeleccionadoPartido = (document.getElementByTagName("select").Partido.selectedIndex); //No funciona ni en consola
    /*¡Éxito!*/ console.log("El índice seleccionado es: "+índiceSeleccionadoPartido+", ¡funciona! :D"); //Devuelve undefined


    document.getElementById("Experimental").innerHTML=(nuevaVar);

    /*¡Éxito!*/ switch (document.getElementsByTagName("select").Partido.selectedOptions[0].outerText) {
        case "Morena":
            búsquedaMorena();
            break;
        case "PAN":
            búsquedaPAN();
            break;
        case "PRI":
            búsquedaPRI();
            break;
        case "PVEM":
            búsquedaPVEM();
            break;
        case "PT":
            búsquedaPT();
            break;
        case "MC":
            búsquedaMC();
            break;
        case "PRD":
            búsquedaPRD();
            break;
        case "Sin partido":
            búsquedaApartidistas();
            break;
        default:
            console.log("Ya casi, el problema es al comparar...");
    }
}

