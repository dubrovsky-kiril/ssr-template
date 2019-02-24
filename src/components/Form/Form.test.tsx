import * as React from "react";
import * as ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Form from "./Form";

describe("Form", () => {
  it("should apply 'formId' prop to form and Button", () => {
    const wrapper = shallow(
      <Form formId="productIdForm" handleOnSubmit={() => {}} buttonTxt="Search">
        <input>Test</input>
      </Form>
    );

    expect(wrapper.find("form").props().id).toBe("productIdForm");
    expect(wrapper.find("Button").props().form).toBe("productIdForm");
  });
  it("should contain children ", () => {
    const children = <input>Test</input>;
    const wrapper = shallow(
      <Form formId="productIdForm" handleOnSubmit={() => {}} buttonTxt="Search">
        {children}
      </Form>
    );

    expect(
      wrapper
        .find("div")
        .children()
        .contains(children)
    ).toEqual(true);
  });
});
