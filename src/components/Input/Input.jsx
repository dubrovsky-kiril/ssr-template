import React from "react";

const Input = ({ label, type, id, isRequired }) => (
  <>
  <label htmlFor={id}>{label}</label>
  <input
    id={id}
    name={id}
    type={type}
    required={isRequired}
  />
  </>
);

export default Input;
