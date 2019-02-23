import * as React from "react";

type ButtonTypes = {
  type?: string;
  form?: string;
  text: string;
  isPending?: boolean;
};

const Button: React.FunctionComponent<ButtonTypes> = ({
  type = "button",
  form,
  text,
  isPending = false
}) => (
  <button type={type} form={form}>
    {isPending ? "Loading" : text}
  </button>
);

export default Button;
