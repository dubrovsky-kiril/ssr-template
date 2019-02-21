import React from "react";

const DumbInput = ({ label, type, id, value, handleOnChange, isRequired }) => (
  <>
  <label htmlFor={id}>
    {label}
  </label>
  <input
    id={id}
    type={type}
    value={value}
    onChange={handleOnChange}
    required={isRequired}
  />
  </>
);

export default DumbInput;