import React from "react";

const Input = ({ label, type, id, value, handleOnChange, isRequired }) => (
  <>
    <label htmlFor={id}>{label}</label>
    <input
      id={id}
      name={id}
      type={type}
      value={value}
      onChange={handleOnChange}
      required={isRequired}
    />
  </>
);

export default Input;
