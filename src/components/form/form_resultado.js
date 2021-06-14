import React, { Component } from "react";

// The form seach section
class FormResultado extends Component {
  render(){
    return (
        <div className="row my-5 justify-content-md-end">
            <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="row g-3 align-items-center">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <label for="resultado" className="col-form-label float-right text-muted"><strong>Resultado:</strong></label>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 align-items-center float-right">
                        <input type="text" id="resultado" className="form-control" name="resultado" />
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default FormResultado;