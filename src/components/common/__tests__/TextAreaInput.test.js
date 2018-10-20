import React from "react";
import { create } from "react-test-renderer";
import TextAreaInput from "../TextAreaInput";

describe("TextAreaInput Component", () => {
  it("should render correctly", () => {
    const TextAreaInputComponent = create(<TextAreaInput />).toJSON();
    expect(TextAreaInputComponent).toMatchSnapshot();
  });
});
