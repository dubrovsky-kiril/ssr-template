import React from "react";
import Form from "./components/Form/Form.jsx";
import Input from "./components/Input/Input.jsx";

const FORM_ID = "productIdForm";
const INPUT_ID = "productId";

const handleOnSubmit = e => {
  e.preventDefault();

  console.log(e.target[INPUT_ID].value);
};

const ProductIdForm = () => {
  return (
    <Form formId={FORM_ID} handleOnSubmit={handleOnSubmit} buttonTxt="Search">
      <Input id={INPUT_ID} type="text" label="Product id" isRequired />
    </Form>
  );
};

export default ProductIdForm;
