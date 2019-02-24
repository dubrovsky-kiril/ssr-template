import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Form from "./Form";
import Input from "../Input/Input";

storiesOf("Form", module).add(
  "default",
  withInfo()(() => (
    <Form formId="productIdForm" handleOnSubmit={() => {}} buttonTxt="Search">
      <Input id="productId" label="Product id" type="text" />
    </Form>
  ))
);
