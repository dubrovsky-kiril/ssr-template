import React from "react";
import Form from "./components/Form/Form.jsx";
import Input from "./components/Input/Input.jsx";
import Button from "./components/Button/Button.jsx";

const formId = "productIdForm";

const handleOnSubmit = e => {
  e.preventDefault();
  console.log(e.target);
};

const ProductIdForm = () => {
  return (
    <Form formId={formId} handleOnSubmit={handleOnSubmit}>
      <Input id="productId" type="text" label="Product id" isRequired />
      <Button type="submit" form={formId} text="Submit" />
    </Form>
  );
};

export default ProductIdForm;
