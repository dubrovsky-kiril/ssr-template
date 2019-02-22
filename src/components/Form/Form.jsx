import React from "react";

const Form = ({ formId, children, handleOnSubmit }) => (
  <form id={formId} onSubmit={handleOnSubmit}>
    {children}
  </form>
);

export default Form;
