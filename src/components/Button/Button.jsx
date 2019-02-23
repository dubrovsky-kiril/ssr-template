import React from "react";

const Button = ({ type, form, text, isFetching }) => (
  <button type={type} form={form}>
    {isFetching ? "Loading" : text}
  </button>
);

export default Button;
