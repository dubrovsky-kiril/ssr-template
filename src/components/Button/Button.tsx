import * as React from "react";

type ButtonTypes = {
  type?: string;
  form?: string;
  txt: string;
  isPending?: boolean;
};

const Button: React.FunctionComponent<ButtonTypes> = ({
  type = "button",
  form,
  txt,
  isPending = false
}) => (
  <button type={type} form={form}>
    {isPending ? "Loading" : txt}
  </button>
);

export default Button;
