<?php
	//*Función general para reemplazar los id de la bd al contenido//
	require("conexión.php");
	/*Función que devuelve el nombre del grupo*/
	function obtiene_grupo($conexion, $idgrup)
	{
		$consulta="SELECT grupo FROM estados WHERE idgrupo=$idgrup";
$query=mysqli_query($conexion,$consulta) or die ("Error en la consulta a la Base de Datos");
while($resultado=mysqli_fetch_array($query))
{
return ($resultado['grupo']);
}
}
/*Función que devuelve el nombre del genero*/
function obtiene_genero($conexion, $idgen)
{
$consulta="SELECT genero FROM generos WHERE idgenero=$idgen";
$query=mysqli_query($conexion,$consulta) or die ("Error en la consulta a la Base de Datos");
while($resultado=mysqli_fetch_array($query))
{
return ($resultado['genero']);
}
}
/*Función que devuelve el nombre de la carrera*/
function obtiene_carrera($conexion, $idcar)
{
$consulta="SELECT carrera FROM carreras WHERE idcarrera=$idcar";
$query=mysqli_query($conexion,$consulta) or die ("Error en la consulta a la Base de Datos");
while($resultado=mysqli_fetch_array($query))
{
return ($resultado['carrera']);
}
}
?>