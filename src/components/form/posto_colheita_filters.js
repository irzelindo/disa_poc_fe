import React, { Component } from "react";

// The form seach section
class PostoColheitaHeaders extends Component {
  render(){
    return (
        <div className="row mb-4">
        <div className="col-sm-12 col-md-12 col-lg-4">
            <div className="row g-3 align-items-center">
                <div className="col-sm-12 col-md-5 col-lg-5">
                    <label for="provincia" className="col-form-label float-right text-muted">Província:</label>
                </div>
                <div className="col-sm-12 col-md-7 col-lg-7">
                    <select className="form-control" id="provincia" name="provincia">
                        <option selected>Província</option>
                        <option value="0">Maputo Província</option>
                        <option value="1">Maputo Cidade</option>
                        <option value="2">Gaza</option>
                        <option value="3">Inhambane</option>
                        <option value="4">Sofala</option>
                        <option value="5">Manica</option>
                        <option value="6">Zambézia</option>
                        <option value="7">Tete</option>
                        <option value="8">Nampula</option>
                        <option value="9">Lichinga</option>
                        <option value="10">Cabo Delgado</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4">
            <div className="row g-3 align-items-center">
                <div className="col-sm-12 col-md-5 col-lg-5">
                    <label for="distrito" className="col-form-label float-right text-muted">Distrito:</label>
                </div>
                <div className="col-sm-12 col-md-7 col-lg-7">
                    <select className="form-control" id="distrito" name="distrito">
                        <option selected>Distrito</option>
                        <option value="0">Distrito_1</option>
                        <option value="1">Distrito_2</option>
                        <option value="2">Distrito_3</option>
                        <option value="3">Distrito_4</option>
                        <option value="4">Distrito_5</option>
                        <option value="5">Distrito_6</option>
                        <option value="6">Distrito_7</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4">
            <div className="row g-3 align-items-center">
                <div className="col-sm-12 col-md-5 col-lg-5">
                    <label for="unidade_sanitaria" className="col-form-label float-right text-muted">Unidade Sanitária:</label>
                </div>
                <div className="col-sm-12 col-md-7 col-lg-7">
                    <select className="form-control" id="unidade_sanitaria" name="unidade_sanitaria">
                        <option selected>Unidade Sanitária</option>
                        <option value="0">Unid_Sani_1</option>
                        <option value="1">Unid_Sani_2</option>
                        <option value="2">Unid_Sani_3</option>
                        <option value="3">Unid_Sani_4</option>
                        <option value="4">Unid_Sani_5</option>
                        <option value="5">Unid_Sani_6</option>
                        <option value="6">Unid_Sani_7</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default PostoColheitaHeaders;