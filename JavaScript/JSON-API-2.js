var urlVariable, datoEstado;
const dttosAguascalientes = 3, dttosBajaCalifornia = 8, dttosBajaCaliforniaSur = 2, dttosCampeche = 2, dttosCDMX = 24, dttosChiapas = 13, dttosChihuahua = 9, dttosCoahuila = 7, dttosColima = 2, dttosDurango = 4, dttosEdoMex = 41, dttosGuanajuato = 15, dttosGuerrero = 9, dttosHidalgo = 7, dttosJalisco = 20, dttosMichoacán = 12, dttosMorelos = 5, dttosNayarit = 3, dttosNuevoLeón = 12, dttosOaxaca = 10, dttosPuebla = 15, dttosQuerétaro = 5, dttosQuintanaRoo = 4, dttosSanLuisPotosí = 7, dttosSinaloa = 7, dttosSonora = 7, dttosTabasco = 6, dttosTamaulipas = 9, dttosTlaxcala = 3, dttosVeracruz = 20, dttosYucatán = 5, dttosZacatecas = 4;
function establecerParámetros(dttosAguascalientes, dttosBajaCalifornia, dttosBajaCaliforniaSur, dttosCampeche, dttosCDMX, dttosChiapas, dttosChihuahua, dttosCoahuila, dttosColima, dttosDurango, dttosEdoMex, dttosGuanajuato, dttosGuerrero, dttosHidalgo, dttosJalisco, dttosMichoacán, dttosMorelos, dttosNayarit, dttosNuevoLeón, dttosOaxaca, dttosPuebla, dttosQuerétaro, dttosQuintanaRoo, dttosSanLuisPotosí, dttosSinaloa, dttosSonora, dttosTabasco, dttosTamaulipas, dttosTlaxcala, dttosVeracruz, dttosYucatán, dttosZacatecas) {
    document.getElementById("ListaDinámica").innerHTML = (""); //Limpia la lista dinámica
    /*¡Éxito!*/ console.log(document.getElementsByTagName("select").Partido.selectedOptions[0].outerText); //Esto en consola devuelve el partido elegido ej.: 'PVEM'
    /*¡Éxito!*/ console.log("¡Saludos, terrícola!");
    var stringSeleccionadoPartido = document.getElementById("Lista1").options[document.getElementById("Lista1").selectedIndex].text;
    /*¡Éxito!*/ // Línea temporal de depuración: // console.log(stringSeleccionadoPartido); //Esto en consola escribe la devolución del partido elegido ej.: 'PVEM'
    console.log(document.getElementById("Lista2").options[document.getElementById("Lista2").selectedIndex].text);
    var SelecciónPartido = (document.getElementsByTagName("select").Partido.selectedOptions[0].outerText);
    var stringSeleccionadoEstado = document.getElementById("Lista2").options[document.getElementById("Lista2").selectedIndex].text;
    if (document.getElementById("FiltroPartido").checked == true) {
        console.log("El filtro de partidos fue activado.");
        document.getElementById("Experimental").innerHTML = (SelecciónPartido);
        switch (stringSeleccionadoPartido) { /*¡Éxito!*/
            case "Morena":
                //búsquedaMorena();
                urlVariable = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosMorena.json";
                break;
            case "PAN":
                //búsquedaPAN();
                urlVariable = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosPAN.json";
                break;
            case "PRI":
                //búsquedaPRI();
                urlVariable = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosPRI.json";
                break;
            case "PVEM":
                //búsquedaPVEM();
                urlVariable = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosPVEM.json";
                break;
            case "PT":
                //búsquedaPT();
                urlVariable = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosPT.json";
                break;
            case "MC":
                //búsquedaMC();
                urlVariable = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosMC.json";
                break;
            case "PRD":
                //búsquedaPRD();
                urlVariable = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosPRD.json";
                break;
            case "Sin partido":
                //búsquedaApartidistas();
                urlVariable = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosApartidistas.json";
                break;
            case "Sin filtro":
                //búsquedaApartidistas();
                urlVariable = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosGlobal.json";
                break;
            default:
                document.getElementById("InsertarResultados").innerHTML = ("");
                console.error("Error fatal");
        }
        if (document.getElementById("FiltroEstado").checked == true) { //Si el filtro de Estados está activado
            console.log("El filtro de estados fue activado.");
            var SelecciónEstado = (document.getElementsByTagName("select").Partido.selectedOptions[0].outerText);
            document.getElementById("Experimental").innerHTML += (", " + SelecciónEstado);
            var localCircs, localDttos;
            localDttos = "";
            switch (stringSeleccionadoEstado) { /*¡Éxito!*/
                case "Aguascalientes":
                    console.log("Usted seleccionó el estado de Aguascalientes");
                    localDttos = dttosAguascalientes;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Aguascalientes";
                    break;
                case "Baja California":
                    console.log("Usted seleccionó el estado de Baja California");
                    localDttos = dttosBajaCalifornia;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Baja California";
                    break;
                case "Baja California Sur":
                    console.log("Usted seleccionó el estado de Baja California Sur");
                    localDttos = dttosBajaCaliforniaSur;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Baja California Sur";
                    break;
                case "Campeche":
                    console.log("Usted seleccionó el estado de Campeche");
                    localDttos = dttosCampeche;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Campeche";
                    break;
                case "Chiapas":
                    console.log("Usted seleccionó el estado de Chiapas");
                    localDttos = dttosChiapas;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Chiapas";
                    break;
                case "Chihuahua":
                    console.log("Usted seleccionó el estado de Chihuahua");
                    localDttos = dttosChihuahua;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Chihuahua";
                    break;
                case "Ciudad de México":
                    console.log("Usted seleccionó el estado de Ciudad de México");
                    localDttos = dttosCDMX;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Ciudad de México";
                    break;
                case "Coahuila":
                    console.log("Usted seleccionó el estado de Coahuila");
                    localDttos = dttosCoahuila;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Coahuila";
                    break;
                case "Colima":
                    console.log("Usted seleccionó el estado de Colima");
                    localDttos = dttosColima;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Colima";
                    break;
                case "Durango":
                    console.log("Usted seleccionó el estado de Durango");
                    localDttos = dttosDurango;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Durango";
                    break;
                case "Estado de México":
                    console.log("Usted seleccionó el estado de Estado de México");
                    localDttos = dttosEdoMex;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Estado de México";
                    break;
                case "Guanajuato":
                    console.log("Usted seleccionó el estado de Guanajuato");
                    localDttos = dttosGuanajuato;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Guanajuato";
                    break;
                case "Guerrero":
                    console.log("Usted seleccionó el estado de Guerrero");
                    localDttos = dttosGuerrero;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Guerrero";
                    break;
                case "Hidalgo":
                    console.log("Usted seleccionó el estado de Hidalgo");
                    localDttos = dttosHidalgo;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Hidalgo";
                    break;
                case "Jalisco":
                    console.log("Usted seleccionó el estado de Jalisco");
                    localDttos = dttosJalisco;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Jalisco";
                    break;
                case "Michoacán":
                    console.log("Usted seleccionó el estado de Michoacán");
                    localDttos = dttosMichoacán;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Michoacán";
                    break;
                case "Morelos":
                    console.log("Usted seleccionó el estado de Morelos");
                    localDttos = dttosMorelos;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Morelos";
                    break;
                case "Nayarit":
                    console.log("Usted seleccionó el estado de Nayarit");
                    localDttos = dttosNayarit;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Nayarit";
                    break;
                case "Nuevo León":
                    console.log("Usted seleccionó el estado de Nuevo León");
                    localDttos = dttosNuevoLeón;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Nuevo León";
                    break;
                case "Oaxaca":
                    console.log("Usted seleccionó el estado de Oaxaca");
                    localDttos = dttosOaxaca;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Oaxaca";
                    break;
                case "Puebla":
                    console.log("Usted seleccionó el estado de Puebla");
                    localDttos = dttosPuebla;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Puebla";
                    break;
                case "Querétaro":
                    console.log("Usted seleccionó el estado de Querétaro");
                    localDttos = dttosQuerétaro;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Querétaro";
                    break;
                case "Quintana Roo":
                    console.log("Usted seleccionó el estado de Quintana Roo");
                    localDttos = dttosQuintanaRoo;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Quintana Roo";
                    break;
                case "San Luis Potosí":
                    console.log("Usted seleccionó el estado de San Luis Potosí");
                    localDttos = dttosSanLuisPotosí;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "San Luis Potosí";
                    break;
                case "Sinaloa":
                    console.log("Usted seleccionó el estado de Sinaloa");
                    localDttos = dttosSinaloa;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Sinaloa";
                    break;
                case "Sonora":
                    console.log("Usted seleccionó el estado de Sonora");
                    localDttos = dttosSonora;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Sonora";
                    break;
                case "Tabasco":
                    console.log("Usted seleccionó el estado de Tabasco");
                    localDttos = dttosTabasco;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Tabasco";
                    break;
                case "Tamaulipas":
                    console.log("Usted seleccionó el estado de Tamaulipas");
                    localDttos = dttosTamaulipas;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Tamaulipas";
                    break;
                case "Tlaxcala":
                    console.log("Usted seleccionó el estado de Tlaxcala");
                    localDttos = dttosTlaxcala;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Tlaxcala";
                    break;
                case "Veracruz":
                    console.log("Usted seleccionó el estado de Veracruz");
                    localDttos = dttosVeracruz;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Veracruz";
                    break;
                case "Yucatán":
                    console.log("Usted seleccionó el estado de Yucatán");
                    localDttos = dttosYucatán;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Yucatán";
                    break;
                case "Zacatecas":
                    console.log("Usted seleccionó el estado de Zacatecas");
                    localDttos = dttosZacatecas;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Zacatecas";
                    break;
                default:
                    localDttos = "Sin filtro";
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Sin filtro";
                    document.getElementById("InsertarResultados").innerHTML = ("");
                    console.error("Error fatal");
            }
            másterDiputados(urlVariable, datoEstado);
        }
        else {
            console.log("El filtro de Estados está inactivo o es ilegible.");
            document.getElementById("GrupoDistritos").innerHTML = ("");
            datoEstado = "Sin filtro";
            másterDiputados(urlVariable, datoEstado);
        }
    }
    else {
        urlVariable = "https://raw.githubusercontent.com/dantecc10/API-POLITIZA/master/DiputadosGlobal.json";
        if (document.getElementById("FiltroEstado").checked == true) { //Si el filtro de Estados está activado
            console.log("El filtro de estados fue activado.");
            var SelecciónEstado = (document.getElementsByTagName("select").Partido.selectedOptions[0].outerText);
            document.getElementById("Experimental").innerHTML += (", " + SelecciónEstado);
            var localCircs, localDttos;
            localDttos = "";
            switch (stringSeleccionadoEstado) { /*¡Éxito!*/
                case "Aguascalientes":
                    console.log("Usted seleccionó el estado de Aguascalientes");
                    localDttos = dttosAguascalientes;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Aguascalientes";
                    break;
                case "Baja California":
                    console.log("Usted seleccionó el estado de Baja California");
                    localDttos = dttosBajaCalifornia;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Baja California";
                    break;
                case "Baja California Sur":
                    console.log("Usted seleccionó el estado de Baja California Sur");
                    localDttos = dttosBajaCaliforniaSur;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Baja California Sur";
                    break;
                case "Campeche":
                    console.log("Usted seleccionó el estado de Campeche");
                    localDttos = dttosCampeche;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Campeche";
                    break;
                case "Chiapas":
                    console.log("Usted seleccionó el estado de Chiapas");
                    localDttos = dttosChiapas;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Chiapas";
                    break;
                case "Chihuahua":
                    console.log("Usted seleccionó el estado de Chihuahua");
                    localDttos = dttosChihuahua;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Chihuahua";
                    break;
                case "Ciudad de México":
                    console.log("Usted seleccionó el estado de Ciudad de México");
                    localDttos = dttosCDMX;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Ciudad de México";
                    break;
                case "Coahuila":
                    console.log("Usted seleccionó el estado de Coahuila");
                    localDttos = dttosCoahuila;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Coahuila";
                    break;
                case "Colima":
                    console.log("Usted seleccionó el estado de Colima");
                    localDttos = dttosColima;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Colima";
                    break;
                case "Durango":
                    console.log("Usted seleccionó el estado de Durango");
                    localDttos = dttosDurango;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Durango";
                    break;
                case "Estado de México":
                    console.log("Usted seleccionó el estado de Estado de México");
                    localDttos = dttosEdoMex;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Estado de México";
                    break;
                case "Guanajuato":
                    console.log("Usted seleccionó el estado de Guanajuato");
                    localDttos = dttosGuanajuato;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Guanajuato";
                    break;
                case "Guerrero":
                    console.log("Usted seleccionó el estado de Guerrero");
                    localDttos = dttosGuerrero;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Guerrero";
                    break;
                case "Hidalgo":
                    console.log("Usted seleccionó el estado de Hidalgo");
                    localDttos = dttosHidalgo;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Hidalgo";
                    break;
                case "Jalisco":
                    console.log("Usted seleccionó el estado de Jalisco");
                    localDttos = dttosJalisco;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Jalisco";
                    break;
                case "Michoacán":
                    console.log("Usted seleccionó el estado de Michoacán");
                    localDttos = dttosMichoacán;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Michoacán";
                    break;
                case "Morelos":
                    console.log("Usted seleccionó el estado de Morelos");
                    localDttos = dttosMorelos;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Morelos";
                    break;
                case "Nayarit":
                    console.log("Usted seleccionó el estado de Nayarit");
                    localDttos = dttosNayarit;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Nayarit";
                    break;
                case "Nuevo León":
                    console.log("Usted seleccionó el estado de Nuevo León");
                    localDttos = dttosNuevoLeón;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Nuevo León";
                    break;
                case "Oaxaca":
                    console.log("Usted seleccionó el estado de Oaxaca");
                    localDttos = dttosOaxaca;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Oaxaca";
                    break;
                case "Puebla":
                    console.log("Usted seleccionó el estado de Puebla");
                    localDttos = dttosPuebla;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Puebla";
                    break;
                case "Querétaro":
                    console.log("Usted seleccionó el estado de Querétaro");
                    localDttos = dttosQuerétaro;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Querétaro";
                    break;
                case "Quintana Roo":
                    console.log("Usted seleccionó el estado de Quintana Roo");
                    localDttos = dttosQuintanaRoo;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Quintana Roo";
                    break;
                case "San Luis Potosí":
                    console.log("Usted seleccionó el estado de San Luis Potosí");
                    localDttos = dttosSanLuisPotosí;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "San Luis Potosí";
                    break;
                case "Sinaloa":
                    console.log("Usted seleccionó el estado de Sinaloa");
                    localDttos = dttosSinaloa;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Sinaloa";
                    break;
                case "Sonora":
                    console.log("Usted seleccionó el estado de Sonora");
                    localDttos = dttosSonora;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Sonora";
                    break;
                case "Tabasco":
                    console.log("Usted seleccionó el estado de Tabasco");
                    localDttos = dttosTabasco;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Tabasco";
                    break;
                case "Tamaulipas":
                    console.log("Usted seleccionó el estado de Tamaulipas");
                    localDttos = dttosTamaulipas;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Tamaulipas";
                    break;
                case "Tlaxcala":
                    console.log("Usted seleccionó el estado de Tlaxcala");
                    localDttos = dttosTlaxcala;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Tlaxcala";
                    break;
                case "Veracruz":
                    console.log("Usted seleccionó el estado de Veracruz");
                    localDttos = dttosVeracruz;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Veracruz";
                    break;
                case "Yucatán":
                    console.log("Usted seleccionó el estado de Yucatán");
                    localDttos = dttosYucatán;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Yucatán";
                    break;
                case "Zacatecas":
                    console.log("Usted seleccionó el estado de Zacatecas");
                    localDttos = dttosZacatecas;
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Zacatecas";
                    break;
                default:
                    localDttos = "Sin filtro";
                    agregaOpcionesDttos(localDttos);
                    datoEstado = "Sin filtro";
                    document.getElementById("InsertarResultados").innerHTML = ("");
                    console.log("Error fatal");
                    másterDiputados(urlVariable, datoEstado);
            }
            másterDiputados(urlVariable, datoEstado);
        }
        else {
            console.log("El filtro de Estados está inactivo o es ilegible.");
            document.getElementById("GrupoDistritos").innerHTML = ("");
            datoEstado = "Sin filtro";
            másterDiputados(urlVariable, datoEstado);
        }
    }
}
function másterDiputados(urlVariable, datoEstado) { //Muestra la información a través de la inserción de código para construir tablas

    /*¡Éxito!*/ // Línea temporal de depuración: // console.log(stringSeleccionadoEstado); //Esto en consola escribe la devolución del estado elegido ej.: 'Aguascalientes'
    fetch(urlVariable).then(function (response) {
        //Lógica de éxito
        return response.json();
    }).then(function (data) {
        //Lógica de éxito con JSON
        document.getElementById("InsertarResultados").innerHTML = ("<tr><th>Número</th><th>Nombre completo</th><th>Partido</th><th>Entidad</th><th>Distrito o <br>Circunscripción</th></tr>");
        var contador = 0;
        if (datoEstado != "Sin filtro") {
            for (var i = 1; i != data.length; i++) {
                if (data[i]["entidad"] == datoEstado) {
                    document.getElementById("InsertarResultados").innerHTML += ("<tr>" + "<td>" + data[i]["número"] + "</td>" + "<td>" + data[i]["nombre"] + " " + data[i]["apellidoPaterno"] + " " + data[i]["apellidoMaterno"] + "</td>" + "<td>" + data[i]["partido"] + "</td>" + "<td>" + data[i]["entidad"] + "</td>" + "<td>" + data[i]["distrito_circunscripcion"] + "</td>");
                    document.getElementById("ListaDinámica").innerHTML += ("<li>" + data[i]["nombre"] + " " + data[i]["apellidoPaterno"] + " " + data[i]["apellidoMaterno"] + " del Estado de " + data[i]["entidad"] + " que representa al (a la) " + data[i]["distrito_circunscripcion"] + " que representa a " + data[i]["partido"] + "</li>");
                    console.log("Diputad@ ", data[i]["número"], ".- ", data[i]["nombre"], " ", data[i]["apellidoPaterno"], " ", data[i]["apellidoMaterno"], " del Estado de ", data[i]["entidad"], " que representa al (a la) ", data[i]["distrito_circunscripcion"], "que representa a ", data[i]["partido"]);
                    contador++;
                }
                else {
                    console.log("Diputad@ ", data[i]["número"], ".- ", data[i]["nombre"], " ", data[i]["apellidoPaterno"], " ", data[i]["apellidoMaterno"], " del Estado de ", data[i]["entidad"], " que representa al (a la) ", data[i]["distrito_circunscripcion"], "que representa a ", data[i]["partido"]) + " no aplica para el filtro de Estados";
                }
            }
            document.getElementById("Experimental").innerHTML += (" (" + contador + " diputados):");
        }
        else {
            for (var i = 1; i != data.length; i++) {
                document.getElementById("InsertarResultados").innerHTML += ("<tr>" + "<td>" + data[i]["número"] + "</td>" + "<td>" + data[i]["nombre"] + " " + data[i]["apellidoPaterno"] + " " + data[i]["apellidoMaterno"] + "</td>" + "<td>" + data[i]["partido"] + "</td>" + "<td>" + data[i]["entidad"] + "</td>" + "<td>" + data[i]["distrito_circunscripcion"] + "</td>");
                document.getElementById("ListaDinámica").innerHTML += ("<li>" + data[i]["nombre"] + " " + data[i]["apellidoPaterno"] + " " + data[i]["apellidoMaterno"] + " del Estado de " + data[i]["entidad"] + " que representa al (a la) " + data[i]["distrito_circunscripcion"] + " que representa a " + data[i]["partido"] + "</li>");
                console.log("Diputad@ ", data[i]["número"], ".- ", data[i]["nombre"], " ", data[i]["apellidoPaterno"], " ", data[i]["apellidoMaterno"], " del Estado de ", data[i]["entidad"], " que representa al (a la) ", data[i]["distrito_circunscripcion"], "que representa a ", data[i]["partido"]);
                contador++;
            }
            document.getElementById("Experimental").innerHTML += (" (" + contador + " diputados):");
        }
    }).catch(function (error) {
        //Lógica de error
        console.log("Error: ", error);
    });
    urlVariable = "";

    //Comprobación de verificación de casilla para filtro de partidos
    if (document.getElementById("FiltroDttoCirc").checked == true) {
        console.log("El filtro de distritos/circunscripciones fue activado.");
    }
    else {
        console.log("El filtro de distritos/circunscripciones está inactivo o es ilegible.");
    }
}
function agregaOpcionesDttos(localDttos, localCircs) {
    if (localDttos != "Sin filtro") {
        document.getElementById("GrupoDistritos").innerHTML = "";
        for (var j = 1; j = localDttos; j++) {
            document.getElementById("GrupoDistritos").innerHTML += ("<option>Distrito " + j + "</option>");
        }
    }
    else {
        document.getElementById("GrupoDistritos").innerHTML = "";
    }
    document.getElementById("GrupoCircunscripciones").innerHTML = "";
    for (var l = 1; l = localCircs; l++) {
        document.getElementById("Circunscripciones").innerHTML += ("<option>Circunscripción " + l + "</option>");
    }
}