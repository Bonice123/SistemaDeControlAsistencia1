<?php
// Conexion mysqli
include'../conexion/conexionli.php';

include'../funciones/calcularEdad.php';
//Variable de Nombre
$varGral="-DP";

$cadena = "SELECT
                id_datos_persona,
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
                hora_registro
            FROM
                datos ORDER BY id_horario DESC";
$consultar = mysqli_query($conexionLi, $cadena);
//$row = mysqli_fetch_array($consultar);
?>
<?php
while( $row = mysqli_fetch_array($consultar) ) {
    $id  = $row[0];
    $id_per  = $row[1];
    $turno = $row[2]; 
    $LE  = $row[3];  
    $LS  = $row[4]; 
    $MaE = $row[5];             
    $MaS = $row[6]; 
    $MiE = $row[7];    
    $MiS = $row[8]; 
    $JE  = $row[9];      
    $JS  = $row[10]; 
    $VE  = $row[11];       
    $VS  = $row[12]; 
    $SE  = $row[13];    
    $SS  = $row[14]; 
    $DE  = $row[15];     
    $DS  = $row[16]; 

}
?>