import React from "react";
import Form from "./components/Form/Form.jsx";
import Input from "./components/Input/Input.jsx";

const formId = "productIdForm";

const handleOnSubmit = e => {
  e.preventDefault();
  console.log(e.target);
};

const ProductIdForm = () => {
  return (
    <Form formId={formId} handleOnSubmit={handleOnSubmit} buttonTxt="Search">
      <Input id="productId" type="text" label="Product id" isRequired />
    </Form>
  );
};

export default ProductIdForm;
