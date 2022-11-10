<!DOCTYPE html>
<html lang="es">

<head>
    <link rel="shortcut icon" href="../IMG/FAVICON TRANSPARENTE.png" type="image/x-icon">
    <link id="EtiquetaCSS" rel="Stylesheet" href="../CSS/CSS GLOBAL - TEMA OSCURO.css" Type="text/css" MEDIA="screen">
    <link id="Oculta/Muestra" rel="Stylesheet" href="../CSS/CSS OCULTAMIENTO.css" Type="text/css" MEDIA="screen">

    <meta name="description" content="Politiza MX: Página web dedicada a hacer de la política un campo de la vida pública para todos los ciudadanos, y hacer soberano al pueblo.">
    <meta name="author" content="Dante Castelán Carpinteyro">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Politiza MX: La política es de todos</title>
</head>
<?php
require("conexión.php");
?>

<body>
    <script src="../JavaScript/CambiarTema.js"></script>
    <!--Encabezado (no mover)--> <br>
    <header id="Encabezado">
        <div id="Contenedor-Encabezado">
            <div id="Contenido-Encabezado">
                <h1>Politiza MX</h1> <a href="../index.php"> <img id="Logo" src="../IMG/FAVICON.PNG" alt="Logo POLITIZA MX">
                </a>
                <div class="Menú-Desplegable"> <button class="Botón-Desplegar">Menú</button>
                    <div class="Contenido-Desplegable"> <a href="SignificadoPolítica.php">¿Qué es la política?</a> <a href="ConceptosPolítica.php">Conceptos políticos</a> <a href="Opinión.php">Artículos de
                            opinión</a> <a href="Poderes.php">División de poderes</ a> <a href="Partidos.php">Partidos
                            políticos</a> <a href="Presidenciables.php">Presidenciables 2024</a><!--  <a href="AcercaDe.php">Acerca de...</a>  !--><a id="CambiaTema" onclick="javascript:CambiarTema();">Cambiar tema</a>
                    </div>
                </div>
            </div>
        </div>
        <div id="Encabezado-Superior"></div>
        <div id="Encabezado-Inferior"></div>
    </header>
    <!--Termina NavBar-->
    <!--Contenido-->
    <h2 id="IndicaArtículos">Inicio de sesión</h2>
    <div class="Contenedor-Artículos" id="PartidosPolíticos">
        <h4 class="Autor-Artículo">Por Dante Castelán Carpinteyro.</h4>
        <h3 class="TítuloArtículo">Por favor, ingrese sus datos:</h3>

        <form>
            <label for="CampoNombre">Escriba su nombre completo:</label>
            <input name="CampoNombre" type="text" placeholder="Nombre completo">
            
            <label for="Email">Dirección de correo electrónico:</label>
            <input type="email" name="Email" placeholder="Correo electrónico">

            <label for="Contraseña">Contraseña:</label>
            <input type="password" name="Contraseña">
        </form>

        <p class="Descripción-Artículo">El Supremo Poder de la Federación se divide en los tres siguientes:</p>
        
        <table id="TablaFiltros">
            <tr id="Fila1">
                <th class="EncabezadoCasilla">Activo / Inactivo</th>
                <th class="EncabezadoNombre">Nombre</th>
                <th>Filtro</th>
            </tr>
            <tr>
                <td><input type="checkbox" id="FiltroPartido" name="Filtro1" value="FiltraPartidos" onclick="establecerParámetros()"></td>
                <td>Partidos</td>
                <td>
                    <select name="Partido[]" id="Lista1" onchange="javascript:establecerParámetros()">
                        <option>Sin filtro</option>
                        <option>Morena</option>
                        <option>PAN</option>
                        <option>PRI</option>
                        <option>PVEM</option>
                        <option>PT</option>
                        <option>MC</option>
                        <option>PRD</option>
                        <option>Sin partido</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td><input type="checkbox" id="FiltroEstado" name="Filtro2" value="FiltraEstados" onclick="establecerParámetros"></td>
                <td>Estados</td>
                <td>
                    <select name="Estado[]" id="Lista2" onchange="establecerParámetros()">
                        <option>Sin filtro</option>
                        <option>Aguascalientes</option>
                        <option>Baja California</option>
                        <option>Baja California Sur</option>
                        <option>Campeche</option>
                        <option>Chiapas</option>
                        <option>Chihuahua</option>
                        <option>Ciudad de México</option>
                        <option>Coahuila</option>
                        <option>Colima</option>
                        <option>Durango</option>
                        <option>Estado de México</option>
                        <option>Guanajuato</option>
                        <option>Guerrero</option>
                        <option>Hidalgo</option>
                        <option>Jalisco</option>
                        <option>Michoacán</option>
                        <option>Morelos</option>
                        <option>Nayarit</option>
                        <option>Nuevo León</option>
                        <option>Oaxaca</option>
                        <option>Puebla</option>
                        <option>Querétaro</option>
                        <option>Quintana Roo</option>
                        <option>San Luis Potosí</option>
                        <option>Sinaloa</option>
                        <option>Sonora</option>
                        <option>Tabasco</option>
                        <option>Tamaulipas</option>
                        <option>Tlaxcala</option>
                        <option>Veracruz</option>
                        <option>Yucatán</option>
                        <option>Zacatecas</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td><input type="checkbox" id="FiltroDttoCirc" name="Filtro3" value="FiltraDttosCircs" onclick="javascript:establecerParámetros()"></td>
                <td>Distritos / <br>Circunscripciones</td>
                <td>
                    <select name="Distrito/Circunscripción[]" id="Lista3" onload="establecerParámetros()" onchange="establecerParámetros()">
                        <option>Sin filtro</option>
                        <optgroup id="GrupoDistritos">
                            <!--Insertar filas y celdas con opciones de distritos-->
                        </optgroup>
                        <optgroup id="GrupoCircunscripciones">
                            <!--Insertar filas y celdas con opciones de circunscripciones-->
                        </optgroup>
                    </select>
                </td>
            </tr>
        </table>
        <hr>
        <table id="InsertarResultados">
            <?php
            $consulta = "SELECT * FROM `diputados global`";
            $resultado = mysqli_query($conexión, $consulta) or die("Error en la consulta a la base de datos");
            echo "<tr>";
            echo "<th>Número</th>";
            echo "<th>Nombre</th>";
            echo "<th>Apellido Paterno</th>";
            echo "<th>Apellido Materno</th>";
            echo "<th>Partido</th>";
            echo "<th>Entidad</th>";
            echo "<th>Distrito / Circunscripción</th>";
            echo "</tr>";
            while ($columna = mysqli_fetch_array($resultado)) {
                echo "<tr>";
                echo "<td>" . $columna['ID_Global'] . "</td>";
                echo "<td>" . $columna['Nombre (Global)'] . "</td>";
                echo "<td>" . $columna['Apellido Paterno (Global)'] . "</td>";
                echo "<td>" . $columna['Apellido Materno (Global)'] . "</td>";
                echo "<td>" . $columna['Partido (Global)'] . "</td>";
                echo "<td>" . $columna['Entidad (Global)'] . "</td>";
                echo "<td>" . $columna['Distrito / Circunscripción (Global)'] . "</td>";
                echo "</tr>";
            }
            ?>
        </table>
        <p class="Descripción-Artículo" id="Experimental"></p>
        <ol class="Descripción-Artículo" id="ListaDinámica"></ol>
        <footer>
            <div id="RedesSociales" align="center">
                <hr id="AntesSociales">
                <script lang="JavaScript" src="../JavaScript/Redes Sociales.js"></script>
                <h3><a href="mailto:dantecc10@gmail.com" class="TítuloArtículo" id="ContactoCorreo">Contacto</a></h3>
                <img class="RedSocial" alt="Ícono de Facebook" id="Facebook" onclick="javascript:AbrirFacebook();" src="../IMG/íconoFacebook.png" />
                <img class="RedSocial" alt="Ícono de WhatsApp" id="WhatsApp" onclick="javascript:AbrirWhatsApp();" src="../IMG/íconoWhatsApp.png" />
                <img class="RedSocial" alt="Ícono de Messenger" id="Messenger" onclick="javascript:AbrirMessenger();" src="../IMG/íconoMessenger.png" />
                <img class="RedSocial" alt="Ícono de YouTube" id="YouTube" onclick="javascript:AbrirYouTube();" src="../IMG/íconoYouTube.png" />
                <img class="RedSocial" alt="Ícono de Telegram" id="Telegram" onclick="javascript:AbrirTelegram();" src="../IMG/íconoTelegram.png" />
                <img class="RedSocial" alt="Ícono de Twitter" id="Twitter" onclick="javascript:AbrirTwitter();" src="../IMG/íconoTwitter.png" />
                <img class="RedSocial" alt="Ícono de GitHub" id="GitHub" onclick="javascript:AbrirGitHub();" src="../IMG/íconoGitHub.png" />
            </div>
            <p id="copyright">Copyright © Dante Castelán Carpinteyro - <i>Führer Industries</i> - 2022</p>
        </footer>
        <script lang="JavaScript" src="../JavaScript/UsoWhile.js"></script>
</body>

</html>