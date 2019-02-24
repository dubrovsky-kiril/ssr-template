import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Input from "./Input";

storiesOf("Input", module).add(
  "default",
  withInfo()(() => <Input id="productId" label="Product id" type="text" />)
);
