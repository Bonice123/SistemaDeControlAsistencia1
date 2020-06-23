<!-- Modal -->
<div class="modal fade" id="modalHorario" tabindex="-1" role="dialog" aria-labelledby="modalDatosCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-md" role="document" >
    <div class="modal-content">
      <div class="modal-header" >
        <h5 class="modal-title" id="txtTitularHorario">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form id="frmHorario<?php echo $varGral?>">
    <input type="hidden"  id="Idh">
    <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="form-group">
                <label for="turno" >Turnos:</label>
                <select id="turno" class="form-control" style="width: 100%"   autofocus required>
                    <option  value="Especial">Especial</option>
                    <option  value="Matutino">Matutino</option>
                    <option  value="Vespertino">Vespertino</option>
                    <option  value="Nocturno">Nocturno</option>
                 </select>
            </div>
        </div>
        <div class="col-xs-6 col-sm-8 col-md-8 col-lg-6">
            <div class="form-group">
                <label for="LE">Lunes Entrada:</label>
                <input type="time" class="form-control " id="LE" autofocus required>
            </div>
        </div>
        <div class="col-xs-6 col-sm-8 col-md-8 col-lg-6">
            <div class="form-group">
                <label for="LS">Lunes Salida:</label>
                <input type="time" class="form-control " id="LS" autofocus required>
            </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="MaE">Martes Entrada:</label>
                <input type="time" class="form-control activo" id="MaE" autofocus required>
            </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="MaS">Martes Salida:</label>
                <input type="time" class="form-control activo" id="MaS" autofocus required>
            </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="MiE">Miercoles Entrada:</label>
                <input type="time" class="form-control activo" id="MiE" autofocus required>
            </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="MiS">Miercoles Salida:</label>
                <input type="time" class="form-control activo" id="MiS" autofocus required>
            </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="JE">Jueves Entrada:</label>
                <input type="time" class="form-control activo" id="JE" autofocus required>
            </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="JS">Jueves Salida:</label>
                <input type="time" class="form-control activo" id="JS" autofocus required>
            </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="VE">Viernes Entrada:</label>
                <input type="time" class="form-control activo" id="VE" autofocus required>
            </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="VS">Viernes Salida:</label>
                <input type="time" class="form-control activo" id="VS" autofocus required>
            </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="SE">Sabado Entrada:</label>
                <input type="time" class="form-control activo" id="SE" autofocus required>
            </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="SS">Sabado Salida:</label>
                <input type="time" class="form-control activo" id="SS" autofocus required>
            </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="DE">Domingo Entrada:</label>
                <input type="time" class="form-control activo" id="DE" autofocus required>
            </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="DS">Domingo Salida:</label>
                <input type="time" class="form-control activo" id="DS" autofocus required>
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="form-group">
                <label for="totalhorario">Total Horas:</label>
                <input type="text" class="form-control activo" id="totalhorario" autofocus required disabled>
            </div>
        </div>
        

        <div class="container">
            <div class="row">
                <div class="col time-left">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" >Cerrar</button>  
                </div>
                <div class="col time-right">
                    <button  type="submit" class="btn btn-outline-success  activo btnEspacio" id="Guardar" >
                        <i class='fa fa-bolt fa-lg'></i>
                        Guardar
                    </button>
                </div>
                
            </div>
        </div>

    </div>

</form>
       
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
</div>
<!-- Modal2 -->
<div class="modal fade" id="modalActualizar" tabindex="-1" role="dialog" aria-labelledby="modalDatosCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-md" role="document" >
    <div class="modal-content">
      <div class="modal-header" >
        <h5 class="modal-title" id="txtTitularHorario2">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form id="frmHorario<?php echo $varGral?>">
    <input type="hidden"  id="idpers">
    <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="form-group">
                <label for="eturno" >Turnos:</label>
                <select id="eturno" class="form-control" style="width: 100%"   autofocus required>
                    <option  value="Especial">Especial</option>
                    <option  value="Matutino">Matutino</option>
                    <option  value="Vespertino">Vespertino</option>
                    <option  value="Nocturno">Nocturno</option>
                 </select>
            </div>
        </div>
        <div class="col-xs-6 col-sm-8 col-md-8 col-lg-6">
            <div class="form-group">
                <label for="eLE">Lunes Entrada:</label>
                <input type="time" class="form-control " id="eLE" autofocus required>
            </div>
        </div>
        <div class="col-xs-6 col-sm-8 col-md-8 col-lg-6">
            <div class="form-group">
                <label for="eLS">Lunes Salida:</label>
                <input type="time" class="form-control " id="eLS" autofocus required>
            </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="eMaE">Martes Entrada:</label>
                <input type="time" class="form-control activo" id="eMaE" autofocus required>
            </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="eMaS">Martes Salida:</label>
                <input type="time" class="form-control activo" id="eMaS" autofocus required>
            </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="eMiE">Miercoles Entrada:</label>
                <input type="time" class="form-control activo" id="eMiE" autofocus required>
            </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="eMiS">Miercoles Salida:</label>
                <input type="time" class="form-control activo" id="eMiS" autofocus required>
            </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="eJE">Jueves Entrada:</label>
                <input type="time" class="form-control activo" id="eJE" autofocus required>
            </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="eJS">Jueves Salida:</label>
                <input type="time" class="form-control activo" id="eJS" autofocus required>
            </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="eVE">Viernes Entrada:</label>
                <input type="time" class="form-control activo" id="eVE" autofocus required>
            </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="eVS">Viernes Salida:</label>
                <input type="time" class="form-control activo" id="eVS" autofocus required>
            </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="eSE">Sabado Entrada:</label>
                <input type="time" class="form-control activo" id="eSE" autofocus required>
            </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="eSS">Sabado Salida:</label>
                <input type="time" class="form-control activo" id="eSS" autofocus required>
            </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="eDE">Domingo Entrada:</label>
                <input type="time" class="form-control activo" id="eDE" autofocus required>
            </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="eDS">Domingo Salida:</label>
                <input type="time" class="form-control activo" id="eDS" autofocus required>
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="form-group">
                <label for="totalhorario2">Total Horas:</label>
                <input type="text" class="form-control activo" id="totalhorario2" autofocus required disabled>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col time-left">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>  
                </div>
                <div class="col time-right">
                    <button  type="submit" class="btn btn-outline-success  activo btnEspacio" id="actua" >
                        <i class='fa fa-bolt fa-lg'></i>
                        Actualizar
                    </button>
                </div>
            </div>
        </div>

    </div>

</form>
       
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
</div>