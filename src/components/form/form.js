import React, { Component } from "react";
import FormHeader from "./form_header";
import FormSeach from './form_search';

class Form extends Component {
  render(){
    return (
        <form>
            <FormHeader />
            <FormSeach />
        </form>
    )
  };
}

export default Form;