<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <title>Consulta a la base de datos Alumnos</title>
</head>
<?php
require("conexión.php");
//require("general.php");
?>

<body>
    <?php
    $consulta = "SELECT * FROM `diputados global`";
    $resultado = mysqli_query($conexión, $consulta) or die("Error en la consulta a la base de datos");
    echo "<table border='2' width='100%'>";
    echo "<tr>";
    echo "<th>ID</th>";
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
        echo "<tr>";
    }
    echo "</table>";
    ?>
</body>

</html>