import React from "react";
import DumbForm from "./components/Form/Form.dumb.jsx";
import SmartInput from "./components/Input/Input.smart.jsx";
import DumbButton from "./components/Button/Button.dumb.jsx";

const ProductIdForm = ({ formId, formMethod, formAction }) => {
  return (
    <>
    <DumbForm formId={formId} formMethod={formMethod} formAction={formAction}>
      <SmartInput
        id="productId"
        type="text"
        label="Product id"
        isRequired
      />
    </DumbForm>
    <DumbButton type="submit" form={formId} text="Submit" />
    </>
  )
};

export default ProductIdForm;