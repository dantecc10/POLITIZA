<!DOCTYPE html>
<html lang="es">

<head>
    <link rel="shortcut icon" href="../IMG/FAVICON TRANSPARENTE.png" type="image/x-icon">
    <link id="EtiquetaCSS" rel="Stylesheet" href="../CSS/CSS GLOBAL - TEMA OSCURO.css" Type="text/css" MEDIA="screen">

    <meta name="description"
        content="Politiza MX: Página web dedicada a hacer de la política un campo de la vida pública para todos los ciudadanos, y hacer soberano al pueblo.">
    <meta name="author" content="Dante Castelán Carpinteyro">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Politiza MX: La política es de todos</title>
</head>

<body>
    <script src="../JavaScript/CambiarTema.js"></script>
    <!--Encabezado (no mover)--> <br>
    <header id="Encabezado">
        <div id="Contenedor-Encabezado">
            <div id="Contenido-Encabezado">
                <h1>Politiza MX</h1> <a href="../index.php"> <img id="Logo" src="../IMG/FAVICON.PNG"
                        alt="Logo POLITIZA MX">
                </a>
                <div class="Menú-Desplegable"> <button class="Botón-Desplegar">Menú</button>
                    <div class="Contenido-Desplegable"> <a href="SignificadoPolítica.php">¿Qué es la política?</a> <a
                            href="ConceptosPolítica.php">Conceptos políticos</a> <a href="Opinión.php">Artículos de
                            opinión</a> <a href="Poderes.php">División de poderes</a> <a href="Partidos.php">Partidos
                            políticos</a> <a href="Presidenciables.php">Presidenciables 2024</a> <a
                            href="AcercaDe.php">Acerca de...</a> <a id="CambiaTema"
                            onclick="javascript:CambiarTema();">Cambiar tema</a>
                    </div>
                </div>
            </div>
        </div>
        <div id="Encabezado-Superior"></div>
        <div id="Encabezado-Inferior"></div>
    </header>
    <!--Termina NavBar-->
    <!--Contenido-->
    <h2 id="IndicaArtículos">Acerca de</h2>
    <div class="Contenedor-Artículos" id="PartidosPolíticos">
        <h3 class="TítuloArtículo">Contacto</h3>
        <h4 class="Autor-Artículo">Por Dante Castelán Carpinteyro.</h4>
        <p class="Descripción-Artículo">Soy Dante Castelán Carpinteyro, y estoy dispuesto a escuchar su opinión sobre
            este sitio y su contenido. Por favor, tómese el tiempo de llenar el siguiente formulario:</p>

        <form action="url_procesamiento" method="POST" name="Información personal.">

            <input name="Nombre" type="text" required="" id="Nombre" placeholder="Nombre*"><br>
            <input name="Apellidos" type="text" required="" id="Apellidos" placeholder="Apellidos*">
            <br>
            <!-- Step 1: Add an email field here -->
            <input name="e-Mail" class="form-control" type="email" required="" id="email"
                placeholder="Correo electrónico*">
            <br>
            <!-- Step 2: Add an address field here -->
            <input name="Teléfono" type="text" id="Teléfono" placeholder="Teléfono">
            <br>
            <label for="curso" class="text-white">Seleccione el curso al cual se desea inscribir</label>
            <select name="curso" class="form-control" required="" id="SelecciónEntidad">
                <option value="english_online">Inglés en Línea</option>
                <option value="english">Inglés</option>
                <option value="canto">Canto</option>
                <option value="guitarra">Guitarra</option>
                <option value="piano">Piano</option>
                <option value="violin">Violín</option>
                <option value="latin">Latín</option>
            </select>
            <br>
            <label for="nacimiento" class="text-white">Fecha de nacimiento</label>
            <input name="nacimiento" class="form-control" type="date" id="fecha" placeholder="Fecha">
            <br>

            <input name="mensaje" class="form-control" type="text" id="mensaje" placeholder="Mensaje (Opcional)">
            <br>
            <br>
            <div>
                <label for="RecepciónDeCorreos">Estoy de acuerdo en recibir correos de <i><b>POLITIZA
                            MX.</b></i></label>
                <input name="RecepciónDeCorreos" type="checkbox" checked="" value="1">
                <br>
            </div>
            <br>
            <label for="Comentario">Escriba su comentario para <i><b>POLITIZA MX</b></i>.</label><br>
            <textarea name="Comentario" id="ÁreaComentario">
            </textarea>
            <!-- Step 3: add a submit button here -->

            <input type="submit" id="BotónEnvío" value="Enviar" onclick="javascript:EnvíaFormulario()">

        </form>

        <p class="Descripción-Artículo">Los partidos políticos tienen dos objetivos principales:</p>
        <p class="Autor-Artículo">Fuente: <i>Partido político</i>, en <i>Gobernación</i>. Disponible en:
            <a>http://sil.gobernacion.gob.mx/Glosario/definicionpop.php?ID=178</a>
        </p>
        <h3 class="TítuloArtículo">Partidos políticos nacionales</h3>
        <p class="Descripción-Artículo">México es una democracia joven, y con un historial partidista bastante complejo
            en la dinámica política y social. A continuación se presentan los partidos políticos con presencia nacional,
            ordenados por fuerza de forma descendente:</p>

        <footer>
            <div id="RedesSociales" align="center">
                <hr id="AntesSociales">
                <script lang="JavaScript" src="../JavaScript/Redes Sociales.js"></script>
                <h3><a href="mailto:dantecc10@gmail.com" class="TítuloArtículo" id="ContactoCorreo">Contacto</a></h3>
                <img class="RedSocial" alt="Ícono de Facebook" id="Facebook" onclick="javascript:AbrirFacebook();"
                    src="../IMG/íconoFacebook.png" />
                <img class="RedSocial" alt="Ícono de WhatsApp" id="WhatsApp" onclick="javascript:AbrirWhatsApp();"
                    src="../IMG/íconoWhatsApp.png" />
                <img class="RedSocial" alt="Ícono de Messenger" id="Messenger" onclick="javascript:AbrirMessenger();"
                    src="../IMG/íconoMessenger.png" />
                <img class="RedSocial" alt="Ícono de YouTube" id="YouTube" onclick="javascript:AbrirYouTube();"
                    src="../IMG/íconoYouTube.png" />
                <img class="RedSocial" alt="Ícono de Telegram" id="Telegram" onclick="javascript:AbrirTelegram();"
                    src="../IMG/íconoTelegram.png" />
                <img class="RedSocial" alt="Ícono de Twitter" id="Twitter" onclick="javascript:AbrirTwitter();"
                    src="../IMG/íconoTwitter.png" />
                <img class="RedSocial" alt="Ícono de GitHub" id="GitHub" onclick="javascript:AbrirGitHub();"
                    src="../IMG/íconoGitHub.png" />
            </div>
            <p id="copyright">Copyright © Dante Castelán Carpinteyro - <i>Führer Industries</i> - 2022</p>
        </footer>
</body>

</html>