import React, { Component } from "react";

// The form seach section
class FormRequisicao extends Component {
  render(){
    return (
        <div className="col-sm-12 col-md-12 col-lg-5 bg-light mx-auto">
            <div className="row">
                <div className="text-center col-12 mt-5">
                    <h6 className="text-muted"><strong>DADOS DA REQUISIÇÃO</strong></h6> 
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="row g-3 align-items-center">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <label for="nome_solicitante" className="col-form-label float-left small text-muted">Nome do Solicitante:</label>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <input type="text" id="nome_solicitante" className="form-control" name="nome_solicitante" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="row g-3 align-items-center">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <label for="data_solicitacao" className="col-form-label float-left text-muted">Data de Solicitação:</label>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <input type="datetime-local" id="data_solicitacao" className="form-control" name="data_solicitacao" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="row g-3 align-items-center">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <label for="data_colheita" className="col-form-label float-left text-muted">Data de Colheita:</label>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <input type="datetime-local" id="data_colheita" className="form-control" name="data_colheita" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="row g-3 align-items-center">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <label for="ptv_mae" className="col-form-label float-left text-muted">PTV da Mãe:</label>
                            </div>
                            <div className="col form-check form-check-inline justify-content-center">
                                <input className="form-check-input" type="radio" name="ptv_mae" value="Sim" />
                                <label className="form-check-label text-muted" for="ptv_mae">Sim:</label>
                            </div>
                            <div className="col form-check form-check-inline justify-content-center">
                                <input className="form-check-input" type="radio" name="ptv_mae" value="Nao" />
                                <label className="form-check-label text-muted" for="ptv_mae">Não:</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="row g-3 align-items-center">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <label for="prof_arv_crianca" className="col-form-label float-left text-muted">Profilaxia com ARVs da Criança:</label>
                            </div>
                            <div className="col form-check form-check-inline justify-content-center">
                                <input className="form-check-input" type="radio" name="prof_arv_crianca" value="Sim" />
                                <label className="form-check-label text-muted" for="prof_arv_crianca">Sim:</label>
                            </div>
                            <div className="col form-check form-check-inline justify-content-center">
                                <input className="form-check-input" type="radio" name="prof_arv_crianca" value="Nao" />
                                <label className="form-check-label text-muted" for="prof_arv_crianca">Não:</label>
                            </div>
                        </div>
                    </div> 
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="row g-3 align-items-center">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <label for="tipo_colheita" className="col-form-label float-left small text-muted">Tipo de Colheita:</label>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <select className="form-control" id="tipo_colheita" name="tipo_colheita">
                                    <option selected>colheita</option>
                                    <option value="1">colheita_2</option>
                                    <option value="2">colheita_2</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="row g-3 align-items-center">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <label for="tipo_colheita" className="col-form-label float-left small text-muted">Tipo de Amostra:</label>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <select className="form-control" id="tipo_amostra" name="tipo_amostra">
                                    <option selected>amostra</option>
                                    <option value="1">amostra_2</option>
                                    <option value="2">amostra_2</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="row g-3 align-items-center">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <label for="prof_arv_crianca" className="col-form-label float-left text-muted">Tipo de Processamento:</label>
                            </div>
                            <div className="col form-check form-check-inline justify-content-center">
                                <input className="form-check-input" type="radio" name="tipo_processamento" value="convencional" />
                                <label className="form-check-label text-muted" for="prof_arv_crianca">Conv:</label>
                            </div>
                            <div className="col form-check form-check-inline justify-content-center">
                                <input className="form-check-input" type="radio" name="tipo_processamento" value="mPima" />
                                <label className="form-check-label text-muted" for="prof_arv_crianca">Mpima:</label>
                            </div>
                        </div>
                    </div> 
                    <div className="col-sm-12 col-md-12 col-lg-12 mb-4">
                        <div className="row g-3 align-items-center">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <label for="cod_amostra_anterior" className="col-form-label float-left small text-muted">Código da Amostra Anterior:</label>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <input type="text" id="cod_amostra_anterior" className="form-control" name="cod_amostra_anterior" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default FormRequisicao;