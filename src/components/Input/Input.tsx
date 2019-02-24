import * as React from "react";

type InputTypes = {
  id: string;
  label: string;
  type: string;
  isRequired?: boolean;
};

const Input: React.FunctionComponent<InputTypes> = ({
  id,
  label,
  type,
  isRequired = false
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} type={type} required={isRequired} />
    </>
  );
};

export default Input;
