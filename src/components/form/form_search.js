import React, { Component } from "react";

// The form seach section
class FormSeach extends Component {
  render(){
    return (
        <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="row g-3 align-items-right">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <label for="nr_de_ordem" className="col-form-label float-left text-muted">Nr. Ordem:</label>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 align-items-center">
                        <input type="text" id="nr_de_ordem" className="form-control" name="nr_de_ordem" />
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="row g-3 align-items-center">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <label for="nr_de_laboratorio" className="col-form-label float-left text-muted">Nr. de Laboratório:</label>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <input type="text" id="nr_de_laboratorio" className="form-control" name="nr_de_laboratorio" />
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default FormSeach;