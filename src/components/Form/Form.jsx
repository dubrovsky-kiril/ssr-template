import React from "react";
import Button from "../Button/Button.jsx";

const Form = ({ formId, children, handleOnSubmit, buttonTxt }) => (
  <form id={formId} onSubmit={handleOnSubmit}>
    {children}
    <Button type="submit" form={formId} text={buttonTxt} />
  </form>
);

export default Form;
