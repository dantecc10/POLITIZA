var urlVariable, FiltroPartidoActivo; FiltroEstadoActivo, FiltroDttoCircActivo;
const dttosAguascalientes = 3, dttosBajaCalifornia = 8, dttosBajaCaliforniaSur = 2, dttosCampeche = 2, dttosCDMX = 24, dttosChiapas = 13, dttosChihuahua = 9, dttosCoahuila = 7, dttosColima = 2, dttosDurango = 4, dttosEdoMex = 41, dttosGuanajuato = 15, dttosGuerrero = 9, dttosHidalgo = 7, dttosJalisco = 20, dttosMichoacán = 12, dttosMorelos = 5, dttosNayarit = 3, dttosNuevoLeón = 12, dttosOaxaca = 10, dttosPuebla = 15, dttosQuerétaro = 5, dttosQuintanaRoo = 4, dttosSanLuisPotosí = 7, dttosSinaloa = 7, dttosSonora = 7, dttosTabasco = 6, dttosTamaulipas = 9, dttosTlaxcala = 3, dttosVeracruz = 20, dttosYucatán = 5, dttosZacatecas = 4;

function establecerParámetros(FiltroPartidoActivo, FiltroEstadoActivo, FiltroDttoCircActivo) {
    document.getElementById("ListaDinámica").innerHTML = (""); //Limpia la lista dinámica

    /*¡Éxito!*/ console.log(document.getElementsByTagName("select").Partido.selectedOptions[0].outerText); //Esto en consola devuelve el partido elegido ej.: 'PVEM'
    var nuevaVar = (document.getElementsByTagName("select").Partido.selectedOptions[0].outerText);
    /*¡Éxito!*/ console.log("¡Saludos, terrícola!");

    var stringSeleccionadoPartido = document.getElementById("Lista1").options[document.getElementById("Lista1").selectedIndex].text;
    /*¡Éxito!*/ // Línea temporal de depuración: // console.log(stringSeleccionadoPartido); //Esto en consola escribe la devolución del partido elegido ej.: 'PVEM'
    var stringSeleccionadoEstado = document.getElementById("Lista2").options[document.getElementById("Lista2").selectedIndex].text;
    /*¡Éxito!*/ // Línea temporal de depuración: // console.log(stringSeleccionadoEstado); //Esto en consola escribe la devolución del estado elegido ej.: 'Aguascalientes'

    document.getElementById("Experimental").innerHTML = (nuevaVar);

    switch (stringSeleccionadoPartido) { /*¡Éxito!*/
        case "Morena":
            //búsquedaMorena();
            urlVariable = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosMorena.json";
            másterDiputados(urlVariable, stringSeleccionadoEstado);
            break;
        case "PAN":
            //búsquedaPAN();
            urlVariable = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosPAN.json";
            másterDiputados(urlVariable, stringSeleccionadoEstado);
            break;
        case "PRI":
            //búsquedaPRI();
            urlVariable = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosPRI.json";
            másterDiputados(urlVariable, stringSeleccionadoEstado);
            break;
        case "PVEM":
            //búsquedaPVEM();
            urlVariable = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosPVEM.json";
            másterDiputados(urlVariable, stringSeleccionadoEstado);
            break;
        case "PT":
            //búsquedaPT();
            urlVariable = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosPT.json";
            másterDiputados(urlVariable, stringSeleccionadoEstado);
            break;
        case "MC":
            //búsquedaMC();
            urlVariable = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosMC.json";
            másterDiputados(urlVariable, stringSeleccionadoEstado);
            break;
        case "PRD":
            //búsquedaPRD();
            urlVariable = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosPRD.json";
            másterDiputados(urlVariable, stringSeleccionadoEstado);
            break;
        case "Sin partido":
            //búsquedaApartidistas();
            urlVariable = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosApartidistas.json";
            másterDiputados(urlVariable, stringSeleccionadoEstado);
            break;
        case "Sin filtro":
            //búsquedaApartidistas();
            urlVariable = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosGlobal.json";
            másterDiputados(urlVariable, stringSeleccionadoEstado);
            break;
        default:
            document.getElementById("InsertarResultados").innerHTML = ("");
            console.error("Error fatal");
    }
}

function másterDiputados(urlVariable, stringSeleccionadoEstado, FiltroPartidoActivo, FiltroEstadoActivo, FiltroDttoCircActivo) { //Muestra la información a través de la inserción de código para construir tablas
    document.getElementById("InsertarResultados").innerHTML = ("<tr><th>Número</th><th>Nombre completo</th><th>Partido</th><th>Entidad</th><th>Distrito o <br>Circunscripción</th></tr>");
    fetch(urlVariable).then(function (response) {
        //Lógica de éxito
        return response.json();
        console.log("")
    }).then(function (data) {
        //Lógica de éxito con JSON
        console.log(document.getElementById("Lista2").options[document.getElementById("Lista2").selectedIndex].text)

        for (var i = 1; i != data.length; i++) {
            document.getElementById("InsertarResultados").innerHTML += ("<tr>" + "<td>" + data[i]["número"] + "</td>" + "<td>" + data[i]["nombre"] + " " + data[i]["apellidoPaterno"] + " " + data[i]["apellidoMaterno"] + "</td>" + "<td>" + data[i]["partido"] + "</td>" + "<td>" + data[i]["entidad"] + "</td>" + "<td>" + data[i]["distrito_circunscripcion"] + "</td>");
            document.getElementById("ListaDinámica").innerHTML += ("<li>" + data[i]["nombre"] + " " + data[i]["apellidoPaterno"] + " " + data[i]["apellidoMaterno"] + " del Estado de " + data[i]["entidad"] + " que representa al (a la) " + data[i]["distrito_circunscripcion"] + " que representa a " + data[i]["partido"] + "</li>");
            console.log("Diputad@ ", data[i]["número"], ".- ", data[i]["nombre"], " ", data[i]["apellidoPaterno"], " ", data[i]["apellidoMaterno"], " del Estado de ", data[i]["entidad"], " que representa al (a la) ", data[i]["distrito_circunscripcion"], "que representa a ", data[i]["partido"]);
        }


        /*for (var i = 1; i != data.length; i++) {
            document.getElementById("InsertarResultados").innerHTML += ("<tr>" + "<td>" + data[i]["número"] + "</td>" + "<td>" + data[i]["nombre"] + " " + data[i]["apellidoPaterno"] + " " + data[i]["apellidoMaterno"] + "</td>" + "<td>" + data[i]["partido"] + "</td>" + "<td>" + data[i]["entidad"] + "</td>" + "<td>" + data[i]["distrito_circunscripcion"] + "</td>");
            document.getElementById("ListaDinámica").innerHTML += ("<li>" + data[i]["nombre"] + " " + data[i]["apellidoPaterno"] + " " + data[i]["apellidoMaterno"] + " del Estado de " + data[i]["entidad"] + " que representa al (a la) " + data[i]["distrito_circunscripcion"] + " que representa a " + data[i]["partido"] + "</li>");
            console.log("Diputad@ ", data[i]["número"], ".- ", data[i]["nombre"], " ", data[i]["apellidoPaterno"], " ", data[i]["apellidoMaterno"], " del Estado de ", data[i]["entidad"], " que representa al (a la) ", data[i]["distrito_circunscripcion"], "que representa a ", data[i]["partido"]);
        }*/
    }).catch(function (error) {
        //Lógica de error
        console.log("Error: ", error);
    });
    urlVariable = "";

    // Línea temporal de depuración: console.log(usarFiltroEstados)
    //Comprobación de verificación de casilla para filtro de partidos
    if (document.getElementById("FiltroPartido").checked == true) {
        console.log("El filtro de partidos fue activado.");
    }
    else {
        console.log("El filtro de partidos está inactivo o es ilegible.");
    }

    if (document.getElementById("FiltroEstado").checked == true) {
        console.log("El filtro de estados fue activado.");
    }
    else {
        console.log("El filtro de Estados está inactivo o es ilegible.");
        document.getElementById("GrupoDistritos").innerHTML = ("");
    }

    if (document.getElementById("FiltroDttoCirc").checked == true) {
        console.log("El filtro de distritos/circunscripciones fue activado.");
    }
    else {
        console.log("El filtro de distritos/circunscripciones está inactivo o es ilegible.");
    }
}