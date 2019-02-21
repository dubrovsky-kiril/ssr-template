import React from "react";

const DumbInput = ({ label, text, type, id, value, handleOnChange }) => (
  <div className="form-group">
    <label htmlFor={label}>{text}</label>
    <input
      type={type}
      className="form-control"
      id={id}
      value={value}
      onChange={handleOnChange}
      required
    />
  </div>
)

export default DumbInput;