import React from "react";

const DumbForm = ({ formAction, formMethod, formId, children }) => (
  <form action={formAction} method={formMethod} id={formId}>
    {children}
  </form>
);

export default DumbForm;
