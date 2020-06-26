<?php
//Variable de Nombre
$varGral="-TE";
?>
<form id="frmGuardar<?php echo $varGral?>">
    <div class="row">
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div class="form-group">
                <label for="desc">Nombre:</label>
                <input type="text" class="form-control" id="nombre"   autofocus required >
            </div>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div class="form-group">
                <label for="desc">Color de Letra:</label>
                <input type="color" class="form-control" id="letra"   autofocus required >
            </div>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div class="form-group">
                <label for="desc">Color Base:</label>
                <input type="color" class="form-control" id="base"   autofocus required >
            </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="desc">Color Base Fuerte:</label>
                <input type="color" class="form-control" id="basefuerte"   autofocus required >
            </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="desc">Color Borde:</label>
                <input type="color" class="form-control" id="borde"   autofocus required >
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col text-left">
                    <button  type="button" class="btn btn-outline-danger  activo btnEspacio" id="btnCancelarTema<?php echo $varGral?>">
                        <i class='fa fa-ban fa-lg'></i>
                        Cancelar
                    </button>
                </div>

                <div class="col text-right">
                    <button  type="submit" class="btn btn-outline-primary  activo btnEspacio" id="btnGuardar<?php echo $varGral?>">
                        <i class='fa fa-save fa-lg'></i>
                        Guardar Información
                    </button>
                </div>
            </div>
        </div>

    </div>

</form>