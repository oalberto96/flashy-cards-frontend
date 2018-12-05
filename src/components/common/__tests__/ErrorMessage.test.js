import React from "react";
import { mount } from "enzyme";
import ErrorMessage from "../ErrorMessage";

describe("ErrorMessage component", () => {
  it("should render", () => {
    const wrapper = mount(<ErrorMessage />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("should render a title", () => {
    const props = { title: "login error" };
    const wrapper = mount(<ErrorMessage {...props} />);
    expect(wrapper.contains("login error")).toEqual(true);
  });

  it("should render a description of the error", () => {
    const props = { description: "This is the error message" };
    const wrapper = mount(<ErrorMessage {...props} />);
    expect(wrapper.contains(props.description)).toEqual(true);
  });
});
