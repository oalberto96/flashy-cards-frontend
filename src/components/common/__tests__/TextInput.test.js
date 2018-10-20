import React from "react";
import { create } from "react-test-renderer";
import TextInput from "../TextInput";

describe("TextInput Component", () => {
  it("Should render correctly", () => {
    const TextInputComponent = create(<TextInput />).toJSON();
    expect(TextInputComponent).toMatchSnapshot();
  });
});
