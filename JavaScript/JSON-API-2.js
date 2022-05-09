function másterDiputados(urlVariable) {
    document.getElementById("InsertarResultados").innerHTML = ("<tr><th>Número</th><th>Nombre completo</th><th>Partido</th><th>Entidad</th><th>Distrito o <br>Circunscripción</th></tr>");
    fetch(urlVariable).then(function (response) {
        //Lógica de éxito
        return response.json();
    }).then(function (data) {
        //Lógica de éxito con JSON
        //nombre = document.getElementById("nombre");
        for (var i = 1; i != data.length; i++) {
            console.log("Diputad@ ", data[i]["número"], ".- ", data[i]["nombre"], " ", data[i]["apellidoPaterno"], " ", data[i]["apellidoMaterno"], " del Estado de ", data[i]["entidad"], " que representa al (a la) ", data[i]["distrito_circunscripcion"], "que representa a ", data[i]["partido"]);
            document.getElementById("ListaDinámica").innerHTML += ("<li>" + data[i]["nombre"] + " " + data[i]["apellidoPaterno"] + " " + data[i]["apellidoMaterno"] + " del Estado de " + data[i]["entidad"] + " que representa al (a la) " + data[i]["distrito_circunscripcion"] + " que representa a " + data[i]["partido"] + "</li>");
            /*if (data[i]["entidad"] == "Puebla") {
                console.log(data[i]["número"], " ", data[i]["nombre"], " ", data[i]["apellidoPaterno"], " ", data[i]["apellidoMaterno"], " es poblano.");
            }*/
            document.getElementById("InsertarResultados").innerHTML += ("<tr>" + "<td>" + data[i]["número"] + "</td>" + "<td>" + data[i]["nombre"] + " " + data[i]["apellidoPaterno"] + " " + data[i]["apellidoMaterno"] + "</td>" + "<td>" + data[i]["partido"] + "</td>" + "<td>" + data[i]["entidad"] + "</td>" + "<td>" + data[i]["distrito_circunscripcion"] + "</td>");
        }
    }).catch(function (error) {
        //Lógica de error
        console.log("Error: ", error);
    });
}

function búsquedaMorena() {
    const url_DMorena = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosMorena.json";
    document.getElementById("InsertarResultados").innerHTML = ("<tr><th>Número</th><th>Nombre completo</th><th>Partido</th><th>Entidad</th><th>Distrito o <br>Circunscripción</th></tr>");
    fetch(url_DMorena).then(function (response) {
        //Lógica de éxito
        return response.json();
    }).then(function (data) {
        //Lógica de éxito con JSON
        //nombre = document.getElementById("nombre");
        for (var i = 1; i != data.length; i++) {
            console.log("Diputad@ ", data[i]["número"], ".- ", data[i]["nombre"], " ", data[i]["apellidoPaterno"], " ", data[i]["apellidoMaterno"], " del Estado de ", data[i]["entidad"], " que representa al (a la) ", data[i]["distrito_circunscripcion"], "que representa a ", data[i]["partido"]);
            document.getElementById("ListaDinámica").innerHTML += ("<li>" + data[i]["nombre"] + " " + data[i]["apellidoPaterno"] + " " + data[i]["apellidoMaterno"] + " del Estado de " + data[i]["entidad"] + " que representa al (a la) " + data[i]["distrito_circunscripcion"] + " que representa a " + data[i]["partido"] + "</li>");
            /*if (data[i]["entidad"] == "Puebla") {
                console.log(data[i]["número"], " ", data[i]["nombre"], " ", data[i]["apellidoPaterno"], " ", data[i]["apellidoMaterno"], " es poblano.");
            }*/
            document.getElementById("InsertarResultados").innerHTML += ("<tr>" + "<td>" + data[i]["número"] + "</td>" + "<td>" + data[i]["nombre"] + " " + data[i]["apellidoPaterno"] + " " + data[i]["apellidoMaterno"] + "</td>" + "<td>" + data[i]["partido"] + "</td>" + "<td>" + data[i]["entidad"] + "</td>" + "<td>" + data[i]["distrito_circunscripcion"] + "</td>");
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
            document.getElementById("ListaDinámica").innerHTML += ("<li>" + data[i]["nombre"] + " " + data[i]["apellidoPaterno"] + " " + data[i]["apellidoMaterno"] + " del Estado de " + data[i]["entidad"] + " que representa al (a la) " + data[i]["distrito_circunscripcion"] + " que representa a " + data[i]["partido"] + "</li>");
            /*if (data[i]["entidad"] == "Puebla") {
                console.log(data[i]["número"], " ", data[i]["nombre"], " ", data[i]["apellidoPaterno"], " ", data[i]["apellidoMaterno"], " es poblano.");
            }*/
            document.getElementById("InsertarResultados").innerHTML += ("<tr>" + "<td>" + data[i]["número"] + "</td>" + "<td>" + data[i]["nombre"] + " " + data[i]["apellidoPaterno"] + " " + data[i]["apellidoMaterno"] + "</td>" + "<td>" + data[i]["partido"] + "</td>" + "<td>" + data[i]["entidad"] + "</td>" + "<td>" + data[i]["distrito_circunscripcion"] + "</td>");
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
            document.getElementById("ListaDinámica").innerHTML += ("<li>" + data[i]["nombre"] + " " + data[i]["apellidoPaterno"] + " " + data[i]["apellidoMaterno"] + " del Estado de " + data[i]["entidad"] + " que representa al (a la) " + data[i]["distrito_circunscripcion"] + " que representa a " + data[i]["partido"] + "</li>");
            /*if (data[i]["entidad"] == "Puebla") {
                console.log(data[i]["número"], " ", data[i]["nombre"], " ", data[i]["apellidoPaterno"], " ", data[i]["apellidoMaterno"], " es poblano.");
            }*/
            document.getElementById("InsertarResultados").innerHTML += ("<tr>" + "<td>" + data[i]["número"] + "</td>" + "<td>" + data[i]["nombre"] + " " + data[i]["apellidoPaterno"] + " " + data[i]["apellidoMaterno"] + "</td>" + "<td>" + data[i]["partido"] + "</td>" + "<td>" + data[i]["entidad"] + "</td>" + "<td>" + data[i]["distrito_circunscripcion"] + "</td>");
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
            document.getElementById("ListaDinámica").innerHTML += ("<li>" + data[i]["nombre"] + " " + data[i]["apellidoPaterno"] + " " + data[i]["apellidoMaterno"] + " del Estado de " + data[i]["entidad"] + " que representa al (a la) " + data[i]["distrito_circunscripcion"] + " que representa a " + data[i]["partido"] + "</li>");
            /*if (data[i]["entidad"] == "Puebla") {
                console.log(data[i]["número"], " ", data[i]["nombre"], " ", data[i]["apellidoPaterno"], " ", data[i]["apellidoMaterno"], " es poblano.");
            }*/
            document.getElementById("InsertarResultados").innerHTML += ("<tr>" + "<td>" + data[i]["número"] + "</td>" + "<td>" + data[i]["nombre"] + " " + data[i]["apellidoPaterno"] + " " + data[i]["apellidoMaterno"] + "</td>" + "<td>" + data[i]["partido"] + "</td>" + "<td>" + data[i]["entidad"] + "</td>" + "<td>" + data[i]["distrito_circunscripcion"] + "</td>");
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
            document.getElementById("ListaDinámica").innerHTML += ("<li>" + data[i]["nombre"] + " " + data[i]["apellidoPaterno"] + " " + data[i]["apellidoMaterno"] + " del Estado de " + data[i]["entidad"] + " que representa al (a la) " + data[i]["distrito_circunscripcion"] + " que representa a " + data[i]["partido"] + "</li>");
            /*if (data[i]["entidad"] == "Puebla") {
                console.log(data[i]["número"], " ", data[i]["nombre"], " ", data[i]["apellidoPaterno"], " ", data[i]["apellidoMaterno"], " es poblano.");
            }*/
            document.getElementById("InsertarResultados").innerHTML += ("<tr>" + "<td>" + data[i]["número"] + "</td>" + "<td>" + data[i]["nombre"] + " " + data[i]["apellidoPaterno"] + " " + data[i]["apellidoMaterno"] + "</td>" + "<td>" + data[i]["partido"] + "</td>" + "<td>" + data[i]["entidad"] + "</td>" + "<td>" + data[i]["distrito_circunscripcion"] + "</td>");
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
            document.getElementById("ListaDinámica").innerHTML += ("<li>" + data[i]["nombre"] + " " + data[i]["apellidoPaterno"] + " " + data[i]["apellidoMaterno"] + " del Estado de " + data[i]["entidad"] + " que representa al (a la) " + data[i]["distrito_circunscripcion"] + " que representa a " + data[i]["partido"] + "</li>");
            /*if (data[i]["entidad"] == "Puebla") {
                console.log(data[i]["número"], " ", data[i]["nombre"], " ", data[i]["apellidoPaterno"], " ", data[i]["apellidoMaterno"], " es poblano.");
            }*/
            document.getElementById("InsertarResultados").innerHTML += ("<tr>" + "<td>" + data[i]["número"] + "</td>" + "<td>" + data[i]["nombre"] + " " + data[i]["apellidoPaterno"] + " " + data[i]["apellidoMaterno"] + "</td>" + "<td>" + data[i]["partido"] + "</td>" + "<td>" + data[i]["entidad"] + "</td>" + "<td>" + data[i]["distrito_circunscripcion"] + "</td>");
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
            document.getElementById("ListaDinámica").innerHTML += ("<li>" + data[i]["nombre"] + " " + data[i]["apellidoPaterno"] + " " + data[i]["apellidoMaterno"] + " del Estado de " + data[i]["entidad"] + " que representa al (a la) " + data[i]["distrito_circunscripcion"] + " que representa a " + data[i]["partido"] + "</li>");
            /*if (data[i]["entidad"] == "Puebla") {
                console.log(data[i]["número"], " ", data[i]["nombre"], " ", data[i]["apellidoPaterno"], " ", data[i]["apellidoMaterno"], " es poblano.");
            }*/
            document.getElementById("InsertarResultados").innerHTML += ("<tr>" + "<td>" + data[i]["número"] + "</td>" + "<td>" + data[i]["nombre"] + " " + data[i]["apellidoPaterno"] + " " + data[i]["apellidoMaterno"] + "</td>" + "<td>" + data[i]["partido"] + "</td>" + "<td>" + data[i]["entidad"] + "</td>" + "<td>" + data[i]["distrito_circunscripcion"] + "</td>");
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
            document.getElementById("ListaDinámica").innerHTML += ("<li>" + data[i]["nombre"] + " " + data[i]["apellidoPaterno"] + " " + data[i]["apellidoMaterno"] + " del Estado de " + data[i]["entidad"] + " que representa al (a la) " + data[i]["distrito_circunscripcion"] + " que representa a " + data[i]["partido"] + "</li>");
            /*if (data[i]["entidad"] == "Puebla") {
                console.log(data[i]["número"], " ", data[i]["nombre"], " ", data[i]["apellidoPaterno"], " ", data[i]["apellidoMaterno"], " es poblano.");
            }*/
            document.getElementById("InsertarResultados").innerHTML += ("<tr>" + "<td>" + data[i]["número"] + "</td>" + "<td>" + data[i]["nombre"] + " " + data[i]["apellidoPaterno"] + " " + data[i]["apellidoMaterno"] + "</td>" + "<td>" + data[i]["partido"] + "</td>" + "<td>" + data[i]["entidad"] + "</td>" + "<td>" + data[i]["distrito_circunscripcion"] + "</td>");
        }
    }).catch(function (error) {
        //Lógica de error
        console.log("Error: ", error);
    });
}

function leerPartido() {
    document.getElementById("ListaDinámica").innerHTML = ("");
    var urlVariable;
    var índiceSeleccionadoPartido;

    //var x = document.getElementById("Lista3").textContent.toString[0]; //No funciona ni en consola
    //console.log("Imprimir 'x': '"+x+"'.");

    /*¡Éxito!*/ console.log(document.getElementsByTagName("select").Partido.selectedOptions[0].outerText); //Esto en consola devuelve el partido elegido ej.: 'PVEM'
    nuevaVar = (document.getElementsByTagName("select").Partido.selectedOptions[0].outerText);
    /*¡Éxito!*/ console.log("¡Saludos, terrícola!");

    var stringSeleccionadoPartido = document.getElementById("Lista1").options[document.getElementById("Lista1").selectedIndex].text;
    /*¡Éxito!*/ console.log(stringSeleccionadoPartido); //Esto en consola escribe la devolución del partido elegido ej.: 'PVEM'
    var stringSeleccionadoEstado = document.getElementById("Lista2").options[document.getElementById("Lista2").selectedIndex].text;
    /*¡Éxito!*/ console.log(stringSeleccionadoEstado); //Esto en consola escribe la devolución del partido elegido ej.: 'PVEM'


    var valorSeleccionadoPartido = document.getElementById("Lista1").options[document.getElementById("Lista1").selectedIndex].value;

    document.getElementById("Experimental").innerHTML = (nuevaVar);

    switch (stringSeleccionadoPartido) { /*¡Éxito!*/
        case "Morena":
            //búsquedaMorena();
            urlVariable = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosMorena.json";
            másterDiputados(urlVariable);
            break;
        case "PAN":
            //búsquedaPAN();
            urlVariable = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosPAN.json";
            másterDiputados(urlVariable);
            break;
        case "PRI":
            //búsquedaPRI();
            urlVariable = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosPRI.json";
            másterDiputados(urlVariable);
            break;
        case "PVEM":
            //búsquedaPVEM();
            urlVariable = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosPVEM.json";
            másterDiputados(urlVariable);
            break;
        case "PT":
            //búsquedaPT();
            urlVariable = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosPT.json";
            másterDiputados(urlVariable);
            break;
        case "MC":
            //búsquedaMC();
            urlVariable = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosMC.json";
            másterDiputados(urlVariable);
            break;
        case "PRD":
            //búsquedaPRD();
            urlVariable = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosPRD.json";
            másterDiputados(urlVariable);
            break;
        case "Sin partido":
            //búsquedaApartidistas();
            urlVariable = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosApartidistas.json";
            másterDiputados(urlVariable);
            break;
        default:
            document.getElementById("InsertarResultados").innerHTML = ("");
            if ((document.getElementsByTagName("select").Partido.selectedOptions[0].outerText) != "Sin partido")
                console.log("Ya casi, el problema es al comparar...");
    }

    switch (stringSeleccionadoEstado) {
        case "Aguascalientes":
            console.log("Usted seleccionó el estado de Aguascalientes");
            break;
        case "Baja California":
            console.log("Usted seleccionó el estado de Baja California");
            break;
        case "Baja California Sur":
            console.log("Usted seleccionó el estado de Baja California Sur");
            break;
        case "Campeche":
            console.log("Usted seleccionó el estado de Campeche");
            break;
        case "Chiapas":
            console.log("Usted seleccionó el estado de Chiapas");
            break;
        case "Chihuahua":
            console.log("Usted seleccionó el estado de Chihuahua");
            break;
        case "Ciudad de México":
            console.log("Usted seleccionó el estado de Ciudad de México");
            break;
        case "Coahuila":
            console.log("Usted seleccionó el estado de Coahuila");
            break;
        case "Colima":
            console.log("Usted seleccionó el estado de Colima");
            break;
        case "Durango":
            console.log("Usted seleccionó el estado de Durango");
            break;
        case "Estado de México":
            console.log("Usted seleccionó el estado de Estado de México");
            break;
        case "Guanajuato":
            console.log("Usted seleccionó el estado de Guanajuato");
            break;
        case "Guerrero":
            console.log("Usted seleccionó el estado de Guerrero");
            break;
        case "Hidalgo":
            console.log("Usted seleccionó el estado de Hidalgo");
            break;
        case "Jalisco":
            console.log("Usted seleccionó el estado de Jalisco");
            break;
        case "Michoacán":
            console.log("Usted seleccionó el estado de Michoacán");
            break;
        case "Morelos":
            console.log("Usted seleccionó el estado de Morelos");
            break;
        case "Nayarit":
            console.log("Usted seleccionó el estado de Nayarit");
            break;
        case "Nuevo León":
            console.log("Usted seleccionó el estado de Nuevo León");
            break;
        case "Oaxaca":
            console.log("Usted seleccionó el estado de Oaxaca");
            break;
        case "Puebla":
            console.log("Usted seleccionó el estado de Puebla");
            break;
        case "Querétaro":
            console.log("Usted seleccionó el estado de Querétaro");
            break;
        case "Quintana Roo":
            console.log("Usted seleccionó el estado de Quintana Roo");
            break;
        case "San Luis Potosí":
            console.log("Usted seleccionó el estado de San Luis Potosí");
            break;
        case "Sinaloa":
            console.log("Usted seleccionó el estado de Sinaloa");
            break;
        case "Sonora":
            console.log("Usted seleccionó el estado de Sonora");
            break;
        case "Tabasco":
            console.log("Usted seleccionó el estado de Tabasco");
            break;
        case "Tamaulipas":
            console.log("Usted seleccionó el estado de Tamaulipas");
            break;
        case "Tlaxcala":
            console.log("Usted seleccionó el estado de Tlaxcala");
            break;
        case "Veracruz":
            console.log("Usted seleccionó el estado de Veracruz");
            break;
        case "Yucatán":
            console.log("Usted seleccionó el estado de Yucatán");
            break;
        case "Zacatecas":
            console.log("Usted seleccionó el estado de Zacatecas");
            break;

    }
}

function comprobarFiltros() {
    var usarFiltroPartidos = document.getElementById("FiltroPartido");
    var usarFiltroEstados = document.getElementById("FiltroEstado");
    var usarFiltroDttosCircs = document.getElementById("FiltroDttoCirc");

    // Línea temporal de depuración: console.log(usarFiltroEstados)
    //Comprobación de verificación de casilla para filtro de partidos
    if (document.getElementById("FiltroPartido").checked == true) {
        console.log("El filtro de partidos fue activado.");
    }
    else {
        console.log("Hubo un error al leer la casilla de partidos, o está desactivado.");
    }

    if (document.getElementById("FiltroEstado").checked == true) {
        const dttosAguascalientes = 3, dttosBajaCalifornia = 8, dttosBajaCaliforniaSur = 2, dttosCampeche = 2, dttosCDMX = 24, dttosChiapas = 13, dttosChihuahua = 9, dttosCoahuila = 7, dttosColima = 2, dttosDurango = 4, dttosEdoMex = 41, dttosGuanajuato = 15, dttosGuerrero = 9, dttosHidalgo = 7, dttosJalisco = 20, dttosMichoacán = 12, dttosMorelos = 5, dttosNayarit = 3, dttosNuevoLeón = 12, dttosOaxaca = 10, dttosPuebla = 15, dttosQuerétaro = 5, dttosQuintanaRoo = 4, dttosSanLuisPotosí = 7, dttosSinaloa = 7, dttosSonora = 7, dttosTabasco = 6, dttosTamaulipas = 9, dttosTlaxcala = 3, dttosVeracruz = 20, dttosYucatán = 5, dttosZacatecas = 4;

        console.log("El filtro de estados fue activado.");
        document.getElementById("Lista3").innerHTML += ("");
    }
    else {
        console.log("Hubo un error al leer la casilla de estados, o está desactivado.");
        document.getElementById("Lista3").innerHTML = ("");
    }

    if (document.getElementById("FiltroDttoCirc").checked == true) {
        console.log("El filtro de distritos/circunscripciones fue activado.");
    }
    else {
        console.log("Hubo un error al leer la casilla de distritos/circunscripciones, o está desactivado.");
    }
}

