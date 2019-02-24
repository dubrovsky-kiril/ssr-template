import * as React from "react";
import Button from "../Button/Button";

type FormTypes = {
  /** connects form with submit button */
  formId: string;
  /** should contain inputs, selectors or other data entrance elements  */
  children: JSX.Element;
  /** should contain submit handler function that will receive children elements data */
  handleOnSubmit(event: React.FormEvent<HTMLElement>): void;
  /** should contain button text */
  buttonTxt: string;
};

const Form: React.FunctionComponent<FormTypes> = ({
  formId,
  children,
  handleOnSubmit,
  buttonTxt
}) => (
  <form id={formId} onSubmit={handleOnSubmit}>
    <div>{children}</div>
    <Button type="submit" form={formId} txt={buttonTxt} />
  </form>
);

export default Form;
