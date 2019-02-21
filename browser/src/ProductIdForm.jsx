import React from "react";
import DumbForm from "./components/Form/Form.dumb.jsx";
import SmartInput from "./components/Input/Input.smart.jsx";
import SmartButton from "./components/Button/Button.smart.jsx";

const ProductIdForm = ({ formId, formMethod, formAction }) => {
  return (
    <DumbForm formId={formId} formMethod={formMethod} formAction={formAction}>
      <SmartInput
        id="productId"
        type="text"
        label="Product id"
        isRequired
      />
      <SmartButton type="submit" form={formId} text="Submit" />
    </DumbForm>
  )
};

export default ProductIdForm;