<?php
/*
    require("conexión.php");

    $inserta = "INSERT INTO `diputados global` (`ID_Global`, `Nombre (Global)`, `Apellido Paterno (Global)`, `Apellido Materno (Global)`, `Partido (Global)`, `Entidad (Global)`, `Distrito / Circunscripción (Global)`) VALUES ";
    
    $id_inserción = $_POST['ID_Form'];
    $nombre_inserción = $_POST['Nombre_Form'];
    $apellidoPaterno_inserción = $_POST['Apellido_Paterno_Form'];
    $apellidoMaterno_inserción = $_POST['Apellido_Materno_Form'];
    $partido_inserción = $_POST['Partido_Form'];
    $entidad_inserción = $_POST['Entidad_Form'];
    $dtto_circ_inserción = $_POST['Distrito_Circunscripción_Form'];
    $coma = ", ";

    $inserciónDefinitiva = ($inserta . "(" . $id_inserción . $coma . "'" . $nombre_inserción . "'" . $coma . "'" . $apellidoMaterno_inserción . "'" . $coma . "'" . $apellidoMaterno_inserción . "'" . $coma . "'" . $partido_inserción . "'" . $coma . "'" . $entidad_inserción . "'" . $coma . "'" . $dtto_circ_inserción . "'" . ")");
    
    // $inserciónDefinitiva ($inserta . "(", $_POST['ID_Global'] . ", '" . $_POST['Nombre (Global)'] . "', '" . $_POST['Apellido Paterno (Global)'] . "', '" . $_POST['Apellido Materno (Global)']) . "', '" .  $_POST['Partido (Global)'] . "' , '" . $_POST['Entidad (Global)'] . "', '" . $_POST['Distrito_Circunscripción (Global)'] . "')";
    
    $resultado = mysqli_query($conexión, $inserciónDefinitiva) or die("Error en la consulta a la base de datos");    
    */

include_once 'conexión.php';
if (isset($_POST['submit'])) {
    $nombre_inserción = $_POST['Nombre_Form'];
    $apellidoPaterno_inserción = $_POST['Apellido_Paterno_Form'];
    $apellidoMaterno_inserción = $_POST['Apellido_Materno_Form'];
    $partido_inserción = $_POST['Partido_Form'];
    $entidad_inserción = $_POST['Entidad_Form'];
    $dtto_circ_inserción = $_POST['Distrito_Circunscripción_Form'];

    $consulta = ("INSERT INTO `diputados global` (`ID_Global`, `Nombre (Global)`, `Apellido Paterno (Global)`, `Apellido Materno (Global)`, `Partido (Global)`, `Entidad (Global)`, `Distrito / Circunscripción (Global)`)
     VALUES ('$nombre_inserción','$apellidoPaterno_inserción','$apellidoMaterno_inserción', '$partido_inserción', '$entidad_inserción', '$dtto_circ_inserción')");

    if (mysqli_query($conexión, $consulta)) {
        echo "New record has been added successfully !";
    } else {
        echo "Error: " . $sql . ":-" . mysqli_error($conn);
    }
    mysqli_close($conn);
}
