import React from "react";

const DumbButton = ({ type, form, text }) => (
  <button type={type} form={form}>
    {text}
  </button>
)

export default DumbButton;