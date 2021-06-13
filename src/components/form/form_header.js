import React, { Component } from "react";

// The form Title goes in this component
class FormHeader extends Component {
  render(){
    return (
      <div className="text-center col-12 my-5">
      <h3 className="my-3 text-muted"><strong>FSR</strong></h3>
      <h6 className="my-3 text-muted"><strong>FORMULÁRIO DE SOLICITAÇÃO 
        PARA A DETENCÇÃO QUALITATIVA DO DNA PROVIRAL 
        DO HIV-1</strong></h6> 
      </div>
    )
  }
}

export default FormHeader;