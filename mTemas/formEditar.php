<?php
//Variable de Nombre
$varGral="-TE";
?>
<form id="frmActualizar<?php echo $varGral?>">

<input type=""  id="tema">

    <div class="row">

        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div class="form-group">
                <label for="nom">Nombre:</label>
                <input type="search" id="nom" class="form-control">
            </div>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div class="form-group">
                <label for="eDesc">Color Letra:</label>
                <input type="color" id="colorL" class="form-control">
            </div>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div class="form-group">
                <label for="eDesc">Color Base:</label>
                <input type="color" id="colorB" class="form-control">
            </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="eDesc">Color Base Fuerte:</label>
                <input type="color" id="CBL" class="form-control">
            </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="eDesc">Color Borde:</label>
                <input type="color" id="ColorB" class="form-control">
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col text-left">
                    <button  type="button" class="btn btn-outline-danger  activo btnEspacio" id="btnCancelarTemaA<?php echo $varGral?>">
                        <i class='fa fa-ban fa-lg'></i>
                        Cancelar
                    </button>
                </div>
                <div class="col text-right">
                    <button  type="submit" class="btn btn-outline-success  activo btnEspacio" id="btnActualizar<?php echo $varGral?>">
                        <i class='fa fa-bolt fa-lg'></i>
                        Actualizar Información
                    </button>
                </div>
            </div>
        </div>

    </div>

</form>