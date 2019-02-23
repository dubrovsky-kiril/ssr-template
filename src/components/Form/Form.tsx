import * as React from "react";
import Button from "../Button/Button";

type FormTypes = {
  formId: string;
  children: JSX.Element;
  handleOnSubmit(event: React.FormEvent<HTMLElement>): void;
  buttonTxt: string;
};

const Form: React.FunctionComponent<FormTypes> = ({
  formId,
  children,
  handleOnSubmit,
  buttonTxt
}) => (
  <form id={formId} onSubmit={handleOnSubmit}>
    {children}
    <Button type="submit" form={formId} text={buttonTxt} />
  </form>
);

export default Form;
