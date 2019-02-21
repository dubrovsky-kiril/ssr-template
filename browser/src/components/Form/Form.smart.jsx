import React from "react";
import DumbForm from "./Form.smart.jsx";

const SmartForm = ({ ...rest }) => {
  return <DumbForm {...rest} />
}