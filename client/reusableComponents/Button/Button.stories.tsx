import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Button from "./Button";

storiesOf("Button", module)
  .add("default", withInfo()(() => <Button txt="Search" />))
  .add("pending", withInfo()(() => <Button txt="Search" isPending />));
