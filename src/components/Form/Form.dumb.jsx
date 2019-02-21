import React from "react";

const DumbForm = ({ formAction, formMethod, formId, children }) => (
  <form action={formAction} method={formMethod} id={formId}>
    {children}
  </form>
);

export default DumbForm;

{/* <SmartInput
      id="seoTitle"
      type={inputType}
      label={inputLabel}
      isRequired={isRequired}
    />
  </form>
  <DumbButton type="submit" text={buttonText} form={formId} /> */}