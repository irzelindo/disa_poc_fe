import React, { Component } from "react";
import FormHeader from "./form_header";
import FormSeach from './form_search';
import PostoColheitaHeader from "./posto_colheita_header";
import PostoColheitaFilters from "./posto_colheita_filters";

class Form extends Component {
  render(){
    return (
        <form>
            <FormHeader />
            <FormSeach />
            <PostoColheitaHeader />
            <PostoColheitaFilters />
        </form>
    )
  };
}

export default Form;