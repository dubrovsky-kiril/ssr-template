import * as React from "react";
import * as ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Button from "./Button";

describe("Button", () => {
  it("should render button text correctly", () => {
    const wrapper = shallow(<Button txt="Search" />);
    expect(wrapper.props().children).toBe("Search");
  });
  it("return Loading with true isPending prop", () => {
    const wrapper = shallow(<Button txt="Search" />);
    expect(wrapper.find("button").text()).toBe("Search");

    wrapper.setProps({ isPending: true });
    expect(wrapper.find("button").text()).toBe("Loading");
  });
  it("matches snapshot", () => {
    const tree = shallow(<Button txt="Search" />);

    expect(toJson(tree)).toMatchSnapshot();
  });
});
