<?php 
	$usuario = "root";
	$contraseña = "";
	$servidor = "127.0.0.1";
	$basededatos = "politiza";
	//$GLOBAL ["conexión"];
	$conexión = mysqli_connect($servidor, $usuario, $contraseña) or die("No se ha podido conectar al servidor de base de datos.");

	$db = mysqli_select_db($conexión, $basededatos) or die ("No se ha podido conectar al servidor de Base de Datos");
?>