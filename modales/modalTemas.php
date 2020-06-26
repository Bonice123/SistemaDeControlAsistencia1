
<div class="modal fade" id="modalImportar" tabindex="-1" role="dialog" aria-labelledby="modalDatosCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-md" role="document" >
    <div class="modal-content">
      <div class="modal-header" >
        <h5  class="modal-title" id="txtTitularHorario">Importar Y Exportar Temas</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form>
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <strong><label for="listaTemas">Seleccione un tema:</label></strong>
                </div>
            </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <select  id="listaTemas" class="select2" style="width: 100% ; margin-bottom: 10px">
                            <option value="1">Obscuro Clasico</option>
                            <option value="4">ITLinares Alternativo</option>
                            <option value="9">CHyP</option>
                        </select>
                        <br>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <button type="button" class="btn btn-outline-dark btn-block btnEspacio" id="btnExportar">
                            <i class="fas fa-file-export"></i>
                            Exportar Tema
                        </option>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <button type="button" class="btn btn-outline-dark btn-block btnEspacio" id="btnImportar">
                            <i class="fas fa-file-import"></i>
                            Importar Tema
                        </option>
                    </div>
                </div>
                
        </form>
        <div class="container">
            <div class="row">
                <div class="col time-left">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>  
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
</div>
 <!-- Modal de carga-->
 <div class="modal" id="modalCarga" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" >
        <div class="modal-dialog modal-sm modal-dialog-centered" >
            <div class="modal-content modal-carga">

            <div class="modal-body modal-carga" style="background:#fff">
                <div class="row">
                <div class="col">
                    <div class="form-control modal-carga">
                    <p class='centrar modal-carga-letra'>
                        <i class="fa fa-spinner fa-pulse fa-4x fa-fw"></i>
                    </p>
                    <p class="centrar animated infinite heartBeat modal-carga-letra" style="font-size:12px;">
                        Cargando...
                    </p>
                    <p id="msjCarga" class="centrar animated infinite heartBeat modal-carga-letra" style="font-size:12px;"></p>
                    </div>
                </div>
                </div>
                
            </div>

            </div>
        </div>
    </div>
    <!-- Modal  Importar tema-->
    <div class="modal fade" id="modalArchivo" tabindex="-1" role="dialog" aria-labelledby="modalDatosCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-md" role="document" >
        <div class="modal-content">
        <div class="modal-header" >
            <h5 class="modal-title" id="txtTitularFoto">Importar Tema</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form action="#" method="post" id="formSubida">
            
                <input id="image" type="file"  class="file"  data-theme="fas">
            
                <input type="hidden" class="form-control-file" name="clavePersona" id="clavePersona" >
                <input type="hidden" class="form-control-file" name="tamanoKB" id="tamanoKB" value="3000">
                <div class="col text-center">
                <button type="button" onclick="importarArchivo();" class="btn btn-outline-dark" style="margin-top:8px;">
                    <i class="fas fa-download"></i> Importar Tema
                </button>
                </div>
            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-dark" data-dismiss="modal">
                <i class="fas fa-times"></i> Cerrar
            </button>
        </div>
        </div>
    </div>
    </div>