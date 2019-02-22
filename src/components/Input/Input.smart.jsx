import React, { useState } from "react";
import DumbInput from "./Input.dumb.jsx";

const handleOnChange = changeValue => e => changeValue(e.target.value);

const SmartInput = ({ ...rest }) => {
  const [value, changeValue] = useState("");

  return (
    <DumbInput
      value={value}
      handleOnChange={handleOnChange(changeValue)}
      {...rest}
    />
  )
}

export default SmartInput;


