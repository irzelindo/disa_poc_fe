import React, { Component } from "react";

// The form seach section
class FormCuidador extends Component {
  render(){
    return (
        <div className="col-sm-12 col-md-12 col-lg-3 bg-light">
                <div className="row">
                    <div className="text-center col-12 mt-5">
                        <h6 className="text-muted"><strong>DADOS DO RESPONSÁVEL</strong></h6> 
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="row g-3 align-items-center">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <label for="nr_de_identificacao" className="col-form-label float-left text-muted">NID:</label>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <input type="text" id="nr_de_identificacao" className="form-control" name="nr_de_identificacao" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="row g-3 align-items-center">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <label for="nome_completo" className="col-form-label float-left text-muted">Nome Completo:</label>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <input type="text" id="nome_completo" className="form-control" name="nome_completo" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <label for="con_contacto" className="col-form-label float-left text-muted">Consentimento para contacto:</label>
                        </div>
                        <div className="col form-check form-check-inline justify-content-center">
                            <input className="form-check-input" type="radio" name="con_contacto" value="Sim" />
                            <label className="form-check-label text-muted" for="contacto">Sim:</label>
                        </div>
                        <div className="col form-check form-check-inline justify-content-center">
                            <input className="form-check-input" type="radio" name="con_contacto" value="Nao" />
                            <label className="form-check-label text-muted" for="contacto">Não:</label>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="row g-3 align-items-center">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <label for="nome_completo" className="col-form-label float-left text-muted">Contactos:</label>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12 my-2">
                            <input type="tel" id="contacto" className="form-control" name="contacto" placeholder="848-484-844"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" required />
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12 my-2">
                            <input type="text" id="contacto_2" className="form-control" name="contacto_2" placeholder="848-484-844"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" required />
                        </div>
                    </div>
                </div>
            </div>
    )
  }
}

export default FormCuidador;