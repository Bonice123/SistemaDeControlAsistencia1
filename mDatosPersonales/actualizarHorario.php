<?php
// Conexion mysqli
include ("../conexion/conexionli.php");

//Recibo valores con el metodo POST
$id  = trim($_POST['id']);
$turno = trim($_POST['turno']);
$LE  = trim($_POST['LE']); 
$LS  = trim($_POST['LS']);
$MaE = trim($_POST['MaE']);             
$MaS = trim($_POST['MaS']);
$MiE = trim($_POST['MiE']);     
$MiS = trim($_POST['MiS']);
$JE  = trim($_POST['JE']);        
$JS  = trim($_POST['JS']);
$VE  = trim($_POST['VE']);       
$VS  = trim($_POST['VS']);
$SE  = trim($_POST['SE']);       
$SS  = trim($_POST['SS']);
$DE  = trim($_POST['DE']);       
$DS  = trim($_POST['DS']);

$fecha=date("Y-m-d"); 
$hora=date ("H:i:s");

//Inserto registro en tabla pacientes 
$cadena = "UPDATE horarios
			SET
            turno        = '$turno',
            l_entrada    = '$LE',
            l_salida     = '$LS', 
            m_entrada    = '$MaE', 
            m_salida     = '$MaS', 
            mi_entrada   = '$MiE', 
            mi_salida    = '$MiS', 
            j_entrada    = '$JE', 
            j_salida     = '$JS', 
            v_entrada    = '$VE', 
            v_salida     = '$VS', 
            s_entrada    = '$SE', 
            s_salida	 = '$SS',
            d_entrada     = '$DE', 
            d_salida       = '$DS', 
            fecha_registro = '$fecha', 
            hora_registro	  = '$hora'
			WHERE 
				id_datos_persona = $id";
$actualizar = mysqli_query($conexionLi, $cadena);

//En caso de error imprime
print_r(mysqli_error($conexionLi));
//Cierro la conexion
mysqli_close($conexionLi);
?>