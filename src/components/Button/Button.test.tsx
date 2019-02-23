import * as React from "react";
import * as ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Button from "./Button";

describe("Button", () => {
  it("Should render Button", () => {
    const wrapper = shallow(<Button txt="Search" />);

    console.log(wrapper.debug());
  });
});
