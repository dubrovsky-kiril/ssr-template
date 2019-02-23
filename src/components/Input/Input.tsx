import * as React from "react";

type InputTypes = {
  label: string;
  type: string;
  id: string;
  isRequired?: boolean;
};

const Input: React.FunctionComponent<InputTypes> = ({
  label,
  type,
  id,
  isRequired = false
}) => (
  <>
    <label htmlFor={id}>{label}</label>
    <input id={id} name={id} type={type} required={isRequired} />
  </>
);

export default Input;
