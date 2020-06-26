//VARIABLE GLOBAL PARA NOMBRAR LOS ELEMENTOS DE LOS  FORMULARIOS
//ESTADO CIVIL-EC 
var nombreModulo_TE="Temas";

$("#frmGuardar-EC").submit(function(e){

    var desc    = $("#desc").val();

    swal({
        title: "¿Estas Seguro?",
        text: "¿Deseas Guardar la información?",
        type: "info",
        showCancelButton: true,
        confirmButtonClass: "btn-primary",
        confirmButtonText: "Si deseo guardarla",
        cancelButtonText: "Cancelar Acción",
        cancelButtonClass: "btn-outline-danger",
        closeOnConfirm: false,
        closeOnCancel: true,
        showLoaderOnConfirm: true
      }, function (isConfirm) {
        if (isConfirm) {
        setTimeout(function () {
            swal.close();
            $.ajax({
                url:"../mEstadoCivil/guardar.php",
                type:"POST",
                dateType:"html",
                data:{desc},
                success:function(respuesta){
                    console.log(respuesta);
                    $("#guardar-EC").hide();
                    llenar_lista_EC();
                    $("#frmGuardar-EC")[0].reset();
                    selectTwo();
                    alertify.success("<i class='fa fa-save fa-lg'></i>", 2);
                    $('#desc').focus();
                    actividad  ="Se insertado un nuevo registro a la tabla "+nombreModulo_EC;
                    var idUser=$("#inicioIdusuario").val();
                    log(actividad,idUser);
        
                },
                error:function(xhr,status){
                    alert("Error en metodo AJAX"); 
                },
            });
        }, 2000);}
        else{
            alertify.error(" <i class='fa fa-times fa-lg'></i> Cancelado",2);
        }
      });

    e.preventDefault();
    return false;
});

$("#frmActualizar-EC").submit(function(e){

    var id        = $("#eIdFC").val();
    var desc    = $("#eDesc").val();

    swal({
        title: "¿Estas Seguro?",
        text: "¿Deseas Actualizar la información?",
        type: "info",
        showCancelButton: true,
        confirmButtonClass: "btn-success",
        confirmButtonText: "Si deseo actualizarla",
        cancelButtonText: "Cancelar Acción",
        cancelButtonClass: "btn-outline-danger",
        closeOnConfirm: false,
        closeOnCancel: true,
        showLoaderOnConfirm: true
      }, function (isConfirm) {
        if (isConfirm) {
        setTimeout(function () {
            swal.close();
            $.ajax({
                url:"../mEstadoCivil/actualizar.php",
                type:"POST",
                dateType:"html",
                data:{id,desc},
                success:function(respuesta){
                    console.log(respuesta);
                    llenar_lista_EC();
                        $("#frmGuardar-EC")[0].reset();
                        $("#frmActualizar-EC")[0].reset();
                        alertify.success("<i class='fa fa-bolt fa-lg'></i>", 2);
                    $("#btnCancelarG-EC , #btnCancelarA-EC").click();
                    actividad  ="Se ha modificado un registro de la tabla "+nombreModulo_EC;
                    var idUser=$("#inicioIdusuario").val();
                    log(actividad,idUser);
                    
                    $('#desc').focus();
                },
                error:function(xhr,status){
                    alert("Error en metodo AJAX"); 
                },
            });
        }, 2000);}
        else{
            alertify.error(" <i class='fa fa-times fa-lg'></i> Cancelado",2);
        }
      });

    e.preventDefault();
    return false;
});

function llenar_lista_tema(){
    abrirModalCarga('Cargando Lista');
    $("#frmGuardar-TE")[0].reset();
    $("#Listado-TE").hide();
    $.ajax({
        url:"../mTemas/lista.php",
        type:"POST",
        dateType:"html",
        data:{},
        success:function(respuesta){
            $("#Listado-TE").html(respuesta);
            $("#Listado-TE").fadeIn("slow");
            cerrarModalCarga();      
            $("#nombre").focus();
        },
        error:function(xhr,status){
            alert("Error en metodo AJAX"); 
        },
    });
}

function llenar_formulario_TE(id,nombreT,letra,base,fuerte,borde){
    console.log(id);
    $("#tema").val(id);
    $("#nom").val(nombreT);
    $("#colorL").val(letra);
    $("#colorB").val(base);
    $("#CBL").val(fuerte);
    $("#ColorB").val(borde);

    $("#lblTitular").text(nombreModulo_TE);
    $("#badgeInfo").text("Modificar datos");

    $("#guardar-TE").hide();
    $("#Listado-TE").hide();
    $("#editar-TE").fadeIn();
    
}

function cambiar_estatus_TE(id,consecutivo){
    var valor=$("#check"+consecutivo).val();
    var contravalor=(valor==1)?0:1;
    $("#check"+consecutivo).val(contravalor);

    $.ajax({
        url:"../mTemas/cEstatus.php",
        type:"POST",
        dateType:"html",
        data:{id,contravalor},
        success:function(respuesta){
            // console.log(respuesta);
            if(contravalor==1){
                alertify.success("<i class='fa fa-check fa-lg'></i>", 2);
                llenar_lista_tema();
                $("#btnEditar-TE"+consecutivo).removeAttr('disabled');
                actividad  ="Se ha reactivado un registro de la tabla "+nombreModulo_TE;
                var idUser=$("#inicioIdusuario").val();
                log(actividad,idUser);
            }else{
                alertify.error("<i class='fa fa-times fa-lg'></i>", 2);
                llenar_lista_tema();
                $("#btnEditar-TE"+consecutivo).attr('disabled','disabled');
                actividad  ="Se ha desactivado un registro de la tabla "+nombreModulo_TE;
                var idUser=$("#inicioIdusuario").val();
                log(actividad,idUser);
            }
        },
        error:function(xhr,status){
            alert("Error en metodo AJAX"); 
        },
    });

}

$("#btnCancelarTema-TE , #btnCancelarTemaA-TE").click(function(){
    $("#editar-TE").hide();
    $("#guardar-TE").hide();

    $("#lblTitular").text(nombreModulo_TE);
    $("#badgeInfo").text("Lista");

    $("#Listado-TE").fadeIn();
 
});


function nuevo_registro_tema(){
    $("#lblTitular").text(nombreModulo_TE);

    $("#badgeInfo").text("Nuevo Tema");

    $("#Listado-TE").hide();
    $("#guardar-TE").fadeIn();
    $('#frmGuardar-TE')[0].reset();
    $("#desc").focus();
    
}
function Importar_Tema(){
    $("#modalArchivo").modal("show");
}
function exportartema(){
    $("#modalImportar").modal("show");
}
