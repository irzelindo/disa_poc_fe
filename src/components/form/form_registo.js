import React, { Component } from "react";
import FormCrianca from "./form_crianca";
import FormCuidador from "./form_cuidador";
import FormRequisicao from "./form_requisicao";

// The form seach section
class FormRegisto extends Component {
  render(){
    return (
        <div className="row">
            <FormCrianca />
            <FormCuidador />
            <FormRequisicao />
        </div>
    );
  }
}

export default FormRegisto;