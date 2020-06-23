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
$cadena = "INSERT INTO horarios
				(id_datos_persona,
                turno,
                l_entrada,  
                l_salida,
                m_entrada, 
                m_salida,
                mi_entrada,	
                mi_salida,
                j_entrada,	
                j_salida,
                v_entrada,	
                v_salida,	
                s_entrada,  
                s_salida,	
                d_entrada,	
                d_salida,
                fecha_registro,
                hora_registro)
			VALUES
				('$id',
                '$turno',
                '$LE',
                '$LS', 
				'$MaE', 
                '$MaS', 
				'$MiE', 
                '$MiS', 
				'$JE',
                '$JS',
				'$VE',
                '$VS',
                '$SE', 
                '$SS', 
                '$DE', 
                '$DS',
                '$fecha',
                '$hora')";
                
$insertar = mysqli_query($conexionLi, $cadena);

//En caso de error imprime
print_r(mysqli_error($conexionLi));
//Cierro la conexion
mysqli_close($conexionLi);
?>