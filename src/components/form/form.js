import React, { Component } from "react";
import FormHeader from "./form_header";
import FormSeach from './form_search';
import PostoColheitaHeader from "./posto_colheita_header";
import PostoColheitaFilters from "./posto_colheita_filters";
import FormRegisto from "./form_registo";
import FormResultado from "./form_resultado";
import FormSubmit from "./form_submit";

class Form extends Component {
  render(){
    return (
        <form>
            <FormHeader />
            <FormSeach />
            <PostoColheitaHeader />
            <PostoColheitaFilters />
            <FormRegisto />
            <FormResultado />
            <FormSubmit />
        </form>
    )
  };
}

export default Form;