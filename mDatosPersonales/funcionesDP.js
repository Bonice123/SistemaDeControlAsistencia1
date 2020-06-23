
var nombreModulo_DP="Datos Personales";
$("#frmGuardar-DP").submit(function(e){

    var clave     = $("#clave").val();
    var nombre    = $("#nombre").val();
    var apPaterno = $("#apPaterno").val();
    var apMaterno = $("#apMaterno").val();
    var fNac      = $("#fNac").val();
    var correo    = $("#correo").val();
    var curp      = $("#curp").val();
    var domicilio = $("#domicilio").val();
    var sexo      = $("#sexo").val();
    var ecivil    = $("#ecivil").val();

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
                url:"../mDatosPersonales/guardar.php",
                type:"POST",
                dateType:"html",
                data:{clave,nombre,apPaterno,apMaterno,fNac,correo,curp,domicilio,sexo,ecivil},
                success:function(respuesta){
                    
                    $("#guardar-DP").hide();
                    llenar_lista_DP();
                    $("#frmGuardar-DP")[0].reset();
                    selectTwo();
                    alertify.success("<i class='fa fa-save fa-lg'></i>", 2);
                    $('#nombre').focus();
                    actividad  ="Se insertado un nuevo registro a la tabla "+nombreModulo_DP;
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

$("#frmActualizar-DP").submit(function(e){

    var id        = $("#eId").val();
    var nombre    = $("#eNombre").val();
    var apPaterno = $("#eApPaterno").val();
    var apMaterno = $("#eApMaterno").val();
    var fNac      = $("#eFnac").val();
    var correo    = $("#eCorreo").val();
    var curp      = $("#eCurp").val();
    var clave     = $("#eClave").val();
    var domicilio = $("#eDomicilio").val();
    var sexo      = $("#eSexo").val();
    var ecivil    = $("#eEcivil").val();

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
                url:"../mDatosPersonales/actualizar.php",
                type:"POST",
                dateType:"html",
                data:{clave,id,nombre,apPaterno,apMaterno,fNac,correo,curp,clave,domicilio,sexo,ecivil},
                success:function(respuesta){
                    //console.log(respuesta);
                    llenar_lista_DP();
                        $("#frmGuardar-DP")[0].reset();
                        $("#frmActualizar-DP")[0].reset();
                        alertify.success("<i class='fa fa-bolt fa-lg'></i>", 2);
                    $("#btnCancelarG-DP , #btnCancelarA-DP").click();
                    actividad  ="Se ha modificado un registro de la tabla tabla "+nombreModulo_DP;
                    var idUser=$("#inicioIdusuario").val();
                    log(actividad,idUser);
                    
                    $('#nombre').focus();
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

function llenar_lista_DP(){
    abrirModalCarga('Cargando Lista');
    $("#frmGuardar-DP")[0].reset();
    $("#Listado-DP").hide();
    $.ajax({
        url:"../mDatosPersonales/lista.php",
        type:"POST",
        dateType:"html",
        data:{},
        success:function(respuesta){
            $("#Listado-DP").html(respuesta);
            $("#Listado-DP").fadeIn("slow");
            cerrarModalCarga();      
            $("#nombre").focus();
        },
        error:function(xhr,status){
            alert("Error en metodo AJAX"); 
        },
    });
}

function edad(fecha){
    $.ajax({
        url:"../mDatosPersonales/calcularEdad.php",
        type:"POST",
        dateType:"html",
        data:{fecha},
        success:function(respuesta){

            $("#edad").val(respuesta);
            $("#eEdad").val(respuesta);

            xedad= parseInt(respuesta);
            if (xedad < 0) {
                
                $("#edad, #eEdad , #fNac , #efNac").css("color", rojo);
            } else {
                
                $("#edad, #eEdad , #fNac , #efNac").css("color", obscuro);
            }
        },
        error:function(xhr,status){
            alert("Error en metodo AJAX"); 
        },
    });
}

function llenar_formulario_DP(id,nombre,apPaterno,apMaterno,fNac,edad,correo,curp,clave,domicilio,sexo,ecivil){
   
    $("#eId").val(id);
    $("#eClave").val(clave);
    $("#eNombre").val(nombre);
    $("#eApPaterno").val(apPaterno);
    $("#eApMaterno").val(apMaterno);
    $("#eFnac").val(fNac);
    $("#eEdad").val(edad);
    $("#eCorreo").val(correo);
    $("#eCurp").val(curp);
    $("#eClave").val(clave);
    $("#eDomicilio").val(domicilio);
    $("#eSexo").val(sexo);
    $("#eEcivil").val(ecivil);

    selectTwo();

    $("#lblTitular").text(nombreModulo_DP);
    $("#badgeInfo").text("Modificar datos");

    $("#guardar-DP").hide();
    $("#Listado-DP").hide();
    $("#editar-DP").fadeIn();
    $("#eNombre").focus();
}

function cambiar_estatus_DP(id,consecutivo){

    var valor=$("#check"+consecutivo).val();
    var contravalor=(valor==1)?0:1;
    $("#check"+consecutivo).val(contravalor);

    $.ajax({
        url:"../mDatosPersonales/cEstatus.php",
        type:"POST",
        dateType:"html",
        data:{id,contravalor},
        success:function(respuesta){
            // console.log(respuesta);
            if(contravalor==1){
                alertify.success("<i class='fa fa-check fa-lg'></i>", 2);
                $("#btnEditar-DP"+consecutivo).removeAttr('disabled');
                $("#btnImprimir-DP"+consecutivo).removeAttr('disabled');
                $("#btnModal-DP"+consecutivo).removeAttr('disabled');
                $("#btnFoto-DP"+consecutivo).removeAttr('disabled');
                $("#btnSonido-DP"+consecutivo).removeAttr('disabled');
                $("#btnHorario"+consecutivo).removeAttr('disabled');
                $("#icoSound-DP"+consecutivo).removeClass("fa fa-volume-mute fa-lg");
                $("#icoSound-DP"+consecutivo).addClass("fa fa-volume-up fa-lg");
                actividad  ="Se ha reactivado un registro de la tabla tabla "+nombreModulo_DP;
                var idUser=$("#inicioIdusuario").val();
                log(actividad,idUser);
            }else{
                alertify.error("<i class='fa fa-times fa-lg'></i>", 2);
                $("#btnEditar-DP"+consecutivo).attr('disabled','disabled');
                $("#btnImprimir-DP"+consecutivo).attr('disabled','disabled');
                $("#btnModal-DP"+consecutivo).attr('disabled','disabled');
                $("#btnFoto-DP"+consecutivo).attr('disabled','disabled');
                $("#btnSonido-DP"+consecutivo).attr('disabled','disabled');
                $("#btnHorario"+consecutivo).removeAttr('disabled','disabled');
                $("#icoSound-DP"+consecutivo).removeClass("fa fa-volume-up fa-lg");
                $("#icoSound-DP"+consecutivo).addClass("fa fa-volume-mute fa-lg");
                actividad  ="Se ha desactivado un registro de la tabla tabla "+nombreModulo_DP;
                var idUser=$("#inicioIdusuario").val();
                log(actividad,idUser);
            }
        },
        error:function(xhr,status){
            alert("Error en metodo AJAX"); 
        },
    });

}

function abrirModalDatos_DP(id,nombre,apPaterno,apMaterno,fNac,edad,correo,curp,clave,domicilio,sexo,ecivil) {
    $("#modalTitle-DP").text("Datos personales - "+nombre+' '+apPaterno);

    $("#mNombre").val(nombre);
    $("#mApPaterno").val(apPaterno);
    $("#mApMaterno").val(apMaterno);
    $("#mFnac").val(fNac);
    $("#mEdad").val(edad);
    $("#mCorreo").val(correo);
    $("#mCurp").val(curp);
    $("#mClave").val(clave);
    $("#mDomicilio").val(domicilio);
    $("#mSexo").val(sexo);
    $("#mEcivil").val(ecivil);

    selectTwo();

    $("#modalDatos-DP").modal("show");
}


//Manipulacion de eventos con jquery
$("#fNac").change(function(){
    var fecha = $(this).val();
    edad(fecha);
    ;
});

$("#efNac").change(function(){
    var fecha = $(this).val();
    edad(fecha);

});

$("#btnCancelarG-DP , #btnCancelarA-DP ,#btnCancelarHorario").click(function(){
    $("#editar-DP").hide();
    $("#guardar-DP").hide();
    $("#modalHorario").hide();

    $("#lblTitular").text(nombreModulo_DP);
    $("#badgeInfo").text("Lista");

    $("#Listado-DP").fadeIn();
 
});


$("#clave").keydown(function() {
    var valor=$(this).val();
    soloNumeros(valor);
});

$("#curp , #eCurp").keyup(function() {

    valor=$(this);
    // Convierte en mayuscula
    valor.val(valor.val().toUpperCase());
    
    //validar curp + expresion regular
    if (curpValida(valor.val())=="Si") {
        //$("#btnGuardar-DP").removeAttr('disabled');
        $(valor).css("color", obscuro);
        alertify.success("Curp valida !",1);
    }else{
        //$("#btnGuardar-DP").attr('disabled','disabled');
        $(valor).css("color", rojo);
    }

});

$("#clave").keyup(function(){
    var valor=$(this).val();
    revisar_clave(valor);
});

//Manipulacion de eventos con jquery

//Revisar clave repetida
function revisar_clave(valor){
    $.ajax({
        url:"../mDatosPersonales/rClave.php",
        type:"POST",
        dateType:"html",
        data:{valor},
        success:function(respuesta){
            res =parseInt(respuesta);
            if (res == 0) {
                $("#clave").css("color", obscuro);
            }else{
                $("#clave").css("color", rojo);
            }
        },
        error:function(xhr,status){
            alert("Error en metodo AJAX"); 
        },
    });
}

//validar curp
function curpValida(valor) {

    var validador;
    var curp=valor;

    // Expresion regular para curp
    var re = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/,
        validado = curp.match(re);
    
    if (!validado){  //Coincide con el formato general?
        validador = "No";
    }else{
        validador = "Si";
    }
    return validador;
}

//llenar combo
function combo_ecivil()
{
    $.ajax({
        url : '../mDatosPersonales/comboEcivil.php',
        data : {},
        type : 'POST',
        dataType : 'html',
        success : function(respuesta) {
            
            $("#ecivil , #eEcivil , #mEcivil , #eDesc").empty();
            $("#ecivil , #eEcivil , #mEcivil , #eDesc").html(respuesta);    
            selectTwo();
        },
        error : function(xhr, status) {
            alert('Disculpe, existió un problema');
        },
    });
}

function nuevo_registro_DP(){
    $("#lblTitular").text(nombreModulo_DP);
    $("#badgeInfo").text("Nuevo registro");

    $("#Listado-DP").hide();
    $("#guardar-DP").fadeIn();
    $('#frmGuardar-DP')[0].reset();
    $("#clave").focus();
    
}


function abrirModalFoto(id,clave,nombre,valorfoto) {

    $("#clavePersona").val(clave);
    $("#txtTitularFoto").text(nombre);

    if (valorfoto=="No") {
        $('#formVista').hide();
        $('#formSubida').fadeIn();
        $('#formSubida')[0].reset();
    }else{
        $('#formSubida').hide();
        $('#formVista').fadeIn();
        var archivo='../fotos/'+clave+".jpg";
        $("#imgFoto").attr("src",archivo);
    }
    
    $("#modalFoto").modal("show");

}



function  eliminarFoto(){

    var formData = new FormData();
    var clave=$('#clavePersona').val();
    formData.append('clave',clave);

    swal({
        title: "¿Estas Seguro?",
        text: "¿Deseas eliminar la foto?",
        type: "info",
        showCancelButton: true,
        confirmButtonClass: "btn-dark",
        confirmButtonText: "Si deseo eliminarla",
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
                url: '../mDatosPersonales/fotoBorrar.php',
                type: 'post',
                data: formData,
                contentType: false,
                processData: false,
                success: function(response) {
                  var res=parseInt(response);
                  switch(res){
                    case 0 :
                        alertify.error("<i class='fa fa-times fa-lg'></i> No se encuentra el archivo",1);
                        $("#modalFoto").modal("hide");
                        llenar_lista_DP();
                      break;
                    case 1 :
                        alertify.warning("<i class='fa fa-check fa-lg'></i> Foto Eliminada",1);
                        $("#modalFoto").modal("hide");
                        llenar_lista_DP();
                        break;
                  }
        
                },
                error:function(xhr,status){
                    alertify.error('Error en proceso');
                },
            });
        }, 2000);}
        else{
            alertify.error(" <i class='fa fa-times fa-lg'></i> Cancelado",2);
        }
      });

}

function subirFoto(){
    var formData = new FormData();

    var files = $('#image')[0].files[0];

    var clave=$('#clavePersona').val();
    var tam=$('#tamanoKB').val();

    formData.append('file',files);
    formData.append('clave',clave);
    formData.append('tam',tam);

    $.ajax({
        url: '../mDatosPersonales/fotoSubir.php',
        type: 'post',
        data: formData,
        contentType: false,
        processData: false,
        success: function(response) {
          var res=parseInt(response);
          switch(res){
            case 0 :
                alertify.success("<i class='fas fa-file-upload'></i>",1);
                $("#modalFoto").modal("hide");
                llenar_lista_DP();
              break;
            case 1 :

                swal({
                    title: "Error!",
                    text: "No ha sido posible cargar el archivo debido a que este debe de tener extención jpg y no debe de sobrepasar los 3 megabytes",
                    type: "error",
                    confirmButtonClass: "btn-dark",
                    confirmButtonText: "Enterado"
                }, function (isConfirm) {
                    alertify.message("Gracias !");
                });
              break;
            default:
                  alertify.error("<i class='fa fa-times fa-lg'></i>",1);
          }

        },
        error:function(xhr,status){
            alertify.error('Error en proceso');
        },
    });
// return false;
}
function abrirModalHorario(id,nombre,valorHorario,turno,LuE,LuS,MaE,MaS,MiE,MiS,JuE,JuS,ViE,ViS,SaE,SaS,DoE,DoS) {
    limpiarmodalhorario();
    if (valorHorario=="No") {
        $("#modalHorario").modal("show");
        $("#Idh").val(id);
        $("#txtTitularHorario").text(nombre);
    }else{
        $("#modalActualizar").modal("show");
        $("#txtTitularHorario2").text(nombre);
        desabilitar();
        $("#idpers").val(id);
        $("#eturno").val(turno);
        $("#eLE").val(LuE);       
        $("#eLS").val(LuS);
        $("#eMaE").val(MaE);        
        $("#eMaS").val(MaS);
        $("#eMiE").val(MiE);   
        $("#eMiS").val(MiS);
        $("#eJE").val(JuE);      
        $("#eJS").val(JuS);
        $("#eVE").val(ViE);     
        $("#eVS").val(ViS);
        $("#eSE").val(SaE);      
        $("#eSS").val(SaS);
        $("#eDE").val(DoE);    
        $("#eDS").val(DoS);

    }
}

$("#modalHorario").submit(function(e){
    var id    = $("#Idh").val();
    var turno   = $("#turno").val();
    var LE   = $("#LE").val();       
    var LS = $("#LS").val();
    var MaE  = $("#MaE").val();        
    var MaS = $("#MaS").val();
    var MiE = $("#MiE").val();   
    var MiS = $("#MiS").val();
    var JE = $("#JE").val();      
    var JS = $("#JS").val();
    var VE = $("#VE").val();     
    var VS = $("#VS").val();
    var SE = $("#SE").val();      
    var SS = $("#SS").val();
    var DE = $("#DE").val();    
    var DS = $("#DS").val();
    
    swal({
        title: "¿Estas Seguro?",
        text: "¿Deseas Guardar el horario?",
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
                url:"../mDatosPersonales/Horario.php",
                type:"POST",
                dateType:"html",
                data:{id,
                     turno,
                     LE,LS,MaE,MaS,MiE,MiS,JE,JS,VE,VS,SE,SS,DE,DS},
                success:function(respuesta ){
                    selectTwo();
                    llenar_lista_DP();
                    $("#modalHorario .close").click();
                    alertify.success("<i class='fa fa-save fa-lg'></i>", 2);
                    $('#nombre').focus();
                    actividad  ="Se insertado un nuevo registro a la tabla " +nombrePersona;
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
$("#modalActualizar").submit(function(e){
    var id    = $("#idpers").val();
    var turno   = $("#eturno").val();
    var LE   = $("#eLE").val();       
    var LS = $("#eLS").val();
    var MaE  = $("#eMaE").val();        
    var MaS = $("#eMaS").val();
    var MiE = $("#eMiE").val();   
    var MiS = $("#eMiS").val();
    var JE = $("#eJE").val();      
    var JS = $("#eJS").val();
    var VE = $("#eVE").val();     
    var VS = $("#eVS").val();
    var SE = $("#eSE").val();      
    var SS = $("#eSS").val();
    var DE = $("#eDE").val();    
    var DS = $("#eDS").val();
    
    swal({
        title: "¿Estas Seguro?",
        text: "¿Deseas actualizar el horario?",
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
                url:"../mDatosPersonales/actualizarHorario.php",
                type:"POST",
                dateType:"html",
                data:{id,
                     turno,
                     LE,LS,MaE,MaS,MiE,MiS,JE,JS,VE,VS,SE,SS,DE,DS},
                success:function(respuesta){
                    selectTwo();
                    llenar_lista_DP();
                    $("#modalActualizar .close").click();
                    alertify.success("<i class='fa fa-save fa-lg'></i>", 2);
                    $('#nombre').focus();
                    actividad  ="Se insertado un nuevo registro a la tabla "+ nombre;
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


function limpiarmodalhorario(params) {
    $("#turno").val(""); 
    $("#LE").val("");   
    $("#LS").val("");
    $("#MaE").val("");  
    $("#MaS").val("");
    $("#MiE").val(""); 
    $("#MiS").val("");
    $("#JE").val("");   
    $("#JS").val("");
    $("#VE").val("");  
    $("#VS").val("");
    $("#SE").val(""); 
    $("#SS").val("");
    $("#DE").val(""); 
    $("#DS").val("");
    $("#totalhorario").val("");
}

function limpiarmodalhorario2(params) {
    $('#LE').val('').prop('disabled', false);
    $('#LS').val('').prop('disabled', false);
    $('#MaE').val('').prop('disabled', false);
    $('#MaS').val('').prop('disabled', false);
    $('#MiE').val('').prop('disabled', false);
    $('#MiS').val('').prop('disabled', false);
    $('#JE').val('').prop('disabled', false);
    $('#JS').val('').prop('disabled', false);
    $('#VE').val('').prop('disabled', false);
    $('#VS').val('').prop('disabled', false);
    $('#SE').val('').prop('disabled', false);
    $('#SS').val('').prop('disabled', false);
    $('#DE').val('').prop('disabled', false);
    $('#DS').val('').prop('disabled', false);
    $('#eLE').val('').prop('disabled', false);
    $('#eLS').val('').prop('disabled', false);
    $('#eMaE').val('').prop('disabled', false);
    $('#eMaS').val('').prop('disabled', false);
    $('#eMiE').val('').prop('disabled', false);
    $('#eMiS').val('').prop('disabled', false);
    $('#eJE').val('').prop('disabled', false);
    $('#eJS').val('').prop('disabled', false);
    $('#eVE').val('').prop('disabled', false);
    $('#eVS').val('').prop('disabled', false);
    $('#eSE').val('').prop('disabled', false);
    $('#eSS').val('').prop('disabled', false);
    $('#eDE').val('').prop('disabled', false);
    $('#eDS').val('').prop('disabled', false);

}
///Para Agregar horario dependiendo el horario
var esp="";
var seis="06:00";
var doce="12:00";
var dieciocho="18:00";
var cero="23:59";

$("#turno").change(function(){
    var turno = $('select[id=turno]').val();
    if (turno=="Especial") {
        limpiarmodalhorario2();
        limpiarmodalhorario2();
        
        $('#LE').prop('disabled', false);
        $('#LS').prop('disabled', false);
        $('#MaE').prop('disabled', false);
        $('#MaS').prop('disabled', false);
        $('#MiE').prop('disabled', false);
        $('#MiS').prop('disabled', false);
        $('#JE').prop('disabled', false);
        $('#JS').prop('disabled', false);
        $('#VE').prop('disabled', false);
        $('#VS').prop('disabled', false);
        $('#SE').prop('disabled', false);
        $('#SS').prop('disabled', false);
        $('#DE').prop('disabled', false);
        $('#DS').prop('disabled', false);
        
    }
    if (turno == "Matutino") {
        desabilitar();
        $('#LE').val(seis);
        $('#LS').val(doce);
        $('#MaE').val(seis);
        $('#MaS').val(doce);
        $('#MiE').val(seis);
        $('#MiS').val(doce);
        $('#JE').val(seis);
        $('#JS').val(doce);
        $('#VE').val(seis);
        $('#VS').val(doce);
        $('#SE').val(seis);
        $('#SS').val(doce);
        $('#DE').val(seis);
        $('#DS').val(doce);

    }
    if (turno == "Vespertino") {
        desabilitar();
        $('#LE').val(doce);
        $('#LS').val(dieciocho);
        $('#MaE').val(doce);
        $('#MaS').val(dieciocho);
        $('#MiE').val(doce);
        $('#MiS').val(dieciocho);
        $('#JE').val(doce);
        $('#JS').val(dieciocho);
        $('#VE').val(doce);
        $('#VS').val(dieciocho);
        $('#SE').val(doce);
        $('#SS').val(dieciocho);
        $('#DE').val(doce);
        $('#DS').val(dieciocho);
    }
    if (turno == "Nocturno") {
        desabilitar();
        $('#LE').val(dieciocho);
        $('#LS').val(cero);
        $('#MaE').val(dieciocho);
        $('#MaS').val(cero);
        $('#MiE').val(dieciocho);
        $('#MiS').val(cero);
        $('#JE').val(dieciocho);
        $('#JS').val(cero);
        $('#VE').val(dieciocho);
        $('#VS').val(cero);
        $('#SE').val(dieciocho);
        $('#SS').val(cero);
        $('#DE').val(dieciocho);
        $('#DS').val(cero);
    }
});

$("#eturno").change(function(){
    var turno = $('select[id=eturno]').val();
    if (turno=="Especial") {
        limpiarmodalhorario2();
        limpiarmodalhorario2();
        
        $('#eLE').prop('disabled', false);
        $('#eLS').prop('disabled', false);
        $('#eMaE').prop('disabled', false);
        $('#eMaS').prop('disabled', false);
        $('#eMiE').prop('disabled', false);
        $('#eMiS').prop('disabled', false);
        $('#eJE').prop('disabled', false);
        $('#eJS').prop('disabled', false);
        $('#eVE').prop('disabled', false);
        $('#eVS').prop('disabled', false);
        $('#eSE').prop('disabled', false);
        $('#eSS').prop('disabled', false);
        $('#eDE').prop('disabled', false);
        $('#eDS').prop('disabled', false);
        
    }
    if (turno == "Matutino") {
        desabilitar();
        sumar();
        $('#eLE').val(seis);
        $('#eLS').val(doce);
        $('#eMaE').val(seis);
        $('#eMaS').val(doce);
        $('#eMiE').val(seis);
        $('#eMiS').val(doce);
        $('#eJE').val(seis);
        $('#eJS').val(doce);
        $('#eVE').val(seis);
        $('#eVS').val(doce);
        $('#eSE').val(seis);
        $('#eSS').val(doce);
        $('#eDE').val(seis);
        $('#eDS').val(doce);

    }
    if (turno == "Vespertino") {
        desabilitar();
        sumar();
        $('#eLE').val(doce);
        $('#eLS').val(dieciocho);
        $('#eMaE').val(doce);
        $('#eMaS').val(dieciocho);
        $('#eMiE').val(doce);
        $('#eMiS').val(dieciocho);
        $('#eJE').val(doce);
        $('#eJS').val(dieciocho);
        $('#eVE').val(doce);
        $('#eVS').val(dieciocho);
        $('#eSE').val(doce);
        $('#eSS').val(dieciocho);
        $('#eDE').val(doce);
        $('#eDS').val(dieciocho);
    }
    if (turno == "Nocturno") {
        desabilitar();
        sumar();
        $('#eLE').val(dieciocho);
        $('#eLS').val(cero);
        $('#eMaE').val(dieciocho);
        $('#eMaS').val(cero);
        $('#eMiE').val(dieciocho);
        $('#eMiS').val(cero);
        $('#eJE').val(dieciocho);
        $('#eJS').val(cero);
        $('#eVE').val(dieciocho);
        $('#eVS').val(cero);
        $('#eSE').val(dieciocho);
        $('#eSS').val(cero);
        $('#eDE').val(dieciocho);
        $('#eDS').val(cero);
    }
});

function llenar_horario(id,id_per,turno,LE,LS,MaE,MaS,MiE,MiS,JE,JS,VE,VS,SE,SS,DE,DS){
    $("#eIdh1").val(id);
    $("#eIdh2").val(id_per);
    $("#eturno").val(turno);
    $("#eLE").val(LE);   
    $("#eLS").val(LS);
    $("#eMaE").val(MaE);  
    $("#eMaS").val(MaS);
    $("#eMiE").val(MiE); 
    $("#eMiS").val(MiS);
    $("#eJE").val(JE);   
    $("#eJS").val(JS);
    $("#eVE").val(VE);  
    $("#eVS").val(VS);
    $("#eSE").val(SE); 
    $("#eSS").val(SS);
    $("#eDE").val(DE); 
    $("#eDS").val(DS);

}
function desabilitar() {
    $('#LE').prop('disabled', true);
    $('#LS').prop('disabled', true);
    $('#MaE').prop('disabled', true);
    $('#MaS').prop('disabled', true);
    $('#MiE').prop('disabled', true);
    $('#MiS').prop('disabled', true);
    $('#JE').prop('disabled', true);
    $('#JS').prop('disabled', true);
    $('#VE').prop('disabled', true);
    $('#VS').prop('disabled', true);
    $('#SE').prop('disabled', true);
    $('#SS').prop('disabled', true);
    $('#DE').prop('disabled', true);
    $('#DS').prop('disabled', true);
    $('#eLE').prop('disabled', true);
    $('#eLS').prop('disabled', true);
    $('#eMaE').prop('disabled', true);
    $('#eMaS').prop('disabled', true);
    $('#eMiE').prop('disabled', true);
    $('#eMiS').prop('disabled', true);
    $('#eJE').prop('disabled', true);
    $('#eJS').prop('disabled', true);
    $('#eVE').prop('disabled', true);
    $('#eVS').prop('disabled', true);
    $('#eSE').prop('disabled', true);
    $('#eSS').prop('disabled', true);
    $('#eDE').prop('disabled', true);
    $('#eDS').prop('disabled', true);
}




var lunesHoras;
var lunesMinutos;
var martesHoras;
var martesMinutos
var miercolesHoras;
var miercolesMinutos;
var juevesHoras;
var juevesMinutos;
var viernesHoras;
var viernesMinutos;
var sabadoHoras;
var sabadoMinutos;
var domingoHoras;
var domingoMinutos;
var resultado;

function sumar(horaE,horaS,dia) {
    leMinutos=parseInt(horaS.substr(3,2));
    leHoras=parseInt(horaS.substr(0,2));

    lsMinutos=parseInt(horaE.substr(3,2));
    lsHoras=parseInt(horaE.substr(0,2));

    if ( (leHoras > lsHoras)||(leHoras==lsHoras && leMinutos >=lsMinutos)) {
        document.getElementById("totalhorario").value = "Pon una hora mayor que la de entrada";
        return false
    }else{
        transMinutos = lsMinutos - leMinutos;
        transHoras = lsHoras - leHoras;

        if (transMinutos < 0) {
            transHoras--;
            transMinutos = 60 + transMinutos;
        }

        horas = transHoras.toString();
        minutos = transMinutos.toString();
        
        if (horas.length < 2) {
            horas = "0"+horas;
        }
        
        if (horas.length < 2) {
            horas = "0"+horas;
        }
        if (dia="lunes") {
            
            lunesHoras=horas;
            lunesMinutos=minutos;
        }
        if (dia="martes") {
            martesHoras=horas;
            martesMinutos=minutos;
        }
        if (dia="miercoles") {
            miercolesHoras=horas;
            miercolesMinutos = minutos
        }
        if (dia = "jueves") {
            juevesHoras=horas;
            juevesMinutos=minutos;
        }
        if (dia = "viernes") {
            viernesHoras=horas;
            viernesMinutos=minutos;
        }
        if (dia = "sabado") {
            sabadoHoras=horas;
            sabadoMinutos= minutos;
        }
        if (dia = "domingo") {
            domingoHoras=horas;
            domingoMinutos=minutos;
        }

        document.getElementById("totalhorario").value = domingoHoras+":"+domingoMinutos;
    }

    
}


//Keyup para checar el horario no sea mayo que el de entrada de guardar
$("#LE").keyup(function(){
    var lentrada = document.getElementById('LE').value;
    var lsalida = document.getElementById('LS').value;
    var dia = "lunes";
    sumar(lsalida,lentrada,dia)
});
$("#LS").keyup(function(){
    var lentrada = document.getElementById('LE').value;
    var lsalida = document.getElementById('LS').value;
    var dia = "lunes";
    sumar(lsalida,lentrada,dia)
});
$("#MaE").keyup(function(){
    var lentrada = document.getElementById('MaE').value;
    var lsalida = document.getElementById('MaS').value;
    var dia = "martes";
    sumar(lsalida,lentrada,dia)
});

$("#MaS").keyup(function(){
    var lentrada = document.getElementById('MaE').value;
    var lsalida = document.getElementById('MaS').value;
    var dia = "martes";
    sumar(lsalida,lentrada,dia)
});
$("#MiE").keyup(function(){
    var lentrada = document.getElementById('MiE').value;
    var lsalida = document.getElementById('MiS').value;
    var dia = "miercoles";
    sumar(lsalida,lentrada,dia)
});
$("#MiS").keyup(function(){
    var lentrada = document.getElementById('MiE').value;
    var lsalida = document.getElementById('MiS').value;
    var dia = "mierjcoles";
    sumar(lsalida,lentrada,dia)
});
$("#JE").keyup(function(){
    var lentrada = document.getElementById('JE').value;
    var lsalida = document.getElementById('JS').value;
    var dia = "jueves";
    sumar(lsalida,lentrada,dia)
});

$("#JS").keyup(function(){
    var lentrada = document.getElementById('JE').value;
    var lsalida = document.getElementById('JS').value;
    var dia = "jueves";
    sumar(lsalida,lentrada,dia)
});
$("#VE").keyup(function(){
    var lentrada = document.getElementById('VE').value;
    var lsalida = document.getElementById('VS').value;
    var dia = "viernes";
    sumar(lsalida,lentrada,dia)
});
$("#VS").keyup(function(){
    var lentrada = document.getElementById('VE').value;
    var lsalida = document.getElementById('VS').value;
    var dia = "viernes";
    sumar(lsalida,lentrada,dia)
});
$("#SE").keyup(function(){
    var lentrada = document.getElementById('SE').value;
    var lsalida = document.getElementById('SS').value;
    var dia = "sabado";
    sumar(lsalida,lentrada,dia)
});
$("#SS").keyup(function(){
    var lentrada = document.getElementById('SE').value;
    var lsalida = document.getElementById('SS').value;
    var dia = "sabado";
    sumar(lsalida,lentrada,dia)
});
$("#DE").keyup(function(){
    var lentrada = document.getElementById('DE').value;
    var lsalida = document.getElementById('DS').value;
    var dia = "domingo";
    sumar(lsalida,lentrada,dia)
});
$("#DS").keyup(function(){
    var lentrada = document.getElementById('DE').value;
    var lsalida = document.getElementById('DS').value;
    var dia = "domingo";
    sumar(lsalida,lentrada,dia)
});
//Keyup para checar el horario no sea mayo que el de entrada de actualizare
$("#eE").keyup(function(){
    var lentrada = document.getElementById('eLE').value;
    var lsalida = document.getElementById('eLS').value;
    var dia = "2lunes";
    sumar2(lsalida,lentrada,dia)
});
$("#eLS").keyup(function(){
    var lentrada = document.getElementById('eLE').value;
    var lsalida = document.getElementById('eLS').value;
    var dia = "2lunes";
    sumar2(lsalida,lentrada,dia)
});
$("#eMaE").keyup(function(){
    var lentrada = document.getElementById('eMaE').value;
    var lsalida = document.getElementById('eMaS').value;
    var dia = "2martes";
    sumar2(lsalida,lentrada,dia)
});

$("#eMaS").keyup(function(){
    var lentrada = document.getElementById('eMaE').value;
    var lsalida = document.getElementById('eMaS').value;
    var dia = "2martes";
    sumar2(lsalida,lentrada,dia)
});
$("#eMiE").keyup(function(){
    var lentrada = document.getElementById('eMiE').value;
    var lsalida = document.getElementById('eMiS').value;
    var dia = "2miercoles";
    sumar2(lsalida,lentrada,dia)
});
$("#eMiS").keyup(function(){
    var lentrada = document.getElementById('eMiE').value;
    var lsalida = document.getElementById('eMiS').value;
    var dia = "2miercoles";
    sumar2(lsalida,lentrada,dia)
});
$("#eJE").keyup(function(){
    var lentrada = document.getElementById('eJE').value;
    var lsalida = document.getElementById('eJS').value;
    var dia = "2jueves";
    sumar2(lsalida,lentrada,dia)
});

$("#eJS").keyup(function(){
    var lentrada = document.getElementById('eJE').value;
    var lsalida = document.getElementById('eJS').value;
    var dia = "2jueves";
    sumar2(lsalida,lentrada,dia)
});
$("#eVE").keyup(function(){
    var lentrada = document.getElementById('eVE').value;
    var lsalida = document.getElementById('eVS').value;
    var dia = "2viernes";
    sumar2(lsalida,lentrada,dia)
});
$("#eVS").keyup(function(){
    var lentrada = document.getElementById('eVE').value;
    var lsalida = document.getElementById('eVS').value;
    var dia = "2viernes";
    sumar2(lsalida,lentrada,dia)
});
$("#eSE").keyup(function(){
    var lentrada = document.getElementById('eSE').value;
    var lsalida = document.getElementById('eSS').value;
    var dia = "2sabado";
    sumar2(lsalida,lentrada,dia)
});
$("#eSS").keyup(function(){
    var lentrada = document.getElementById('eSE').value;e
    var lsalida = document.getElementById('eSS').value;
    var dia = "2sabado";
    sumar2(lsalida,lentrada,dia)
});
$("#eDE").keyup(function(){
    var lentrada = document.getElementById('eDE').value;
    var lsalida = document.getElementById('eDS').value;
    var dia = "2domingo";
    sumar2(lsalida,lentrada,dia)
});
$("#eDS").keyup(function(){
    var lentrada = document.getElementById('eDE').value;
    var lsalida = document.getElementById('eDS').value;
    var dia = "2domingo";
    sumar2(lsalida,lentrada,dia)
});
