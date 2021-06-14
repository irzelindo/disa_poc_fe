import React, { Component } from "react";

// The form seach section
class FormCrianca extends Component {
  render(){
    return (
        <div className="col-sm-12 col-md-12 col-lg-3 bg-light mx-auto">
            <div class="row">
                <div class="text-center col-12 mt-5">
                    <h6 class="text-muted"><strong>DADOS DA CRIANÇA</strong></h6> 
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
                <div className="row g-3 align-items-center">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <label for="data_nascimento" className="col-form-label float-left text-muted">Data de Nascimento:</label>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <input type="datetime-local" id="data_nascimento" className="form-control" name="data_nascimento" />
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default FormCrianca;