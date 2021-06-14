import React, { Component } from "react";

// The form seach section
class FormSubmit extends Component {
  render(){
    return (
        <div className="row my-5 justify-content-md-center">
            <button className="col-md-3 btn btn-success m-3 btn-block" type="submit">Salvar</button>
            <button className="col-md-3 btn btn-secondary m-3 btn-block" type="button">Cancelar</button>
        </div>
    );
  }
}

export default FormSubmit;
