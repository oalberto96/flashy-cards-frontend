import React from "react";
import { mount } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import SignUp from "../SignUp";

describe("SignUp component", () => {
  it("should contain a textinput for username", () => {
    const wrapper = mount(
      <BrowserRouter>
        <SignUp onClick={jest.fn()} />
      </BrowserRouter>
    );
    expect(wrapper.find("TextInput").contains("Email")).toEqual(true);
  });

  it("should contain a textinput for password", () => {
    const wrapper = mount(
      <BrowserRouter>
        <SignUp onClick={jest.fn()} />
      </BrowserRouter>
    );
    expect(wrapper.find("TextInput").contains("Password")).toEqual(true);
  });

  it("should contain a textinput to confirm password", () => {
    const wrapper = mount(
      <BrowserRouter>
        <SignUp onClick={jest.fn()} />
      </BrowserRouter>
    );
    expect(wrapper.find("TextInput").find("#confirmPassword").length).toEqual(
      1
    );
  });

  it("should call the SignUp function", () => {
    const SignUpClick = jest.fn();
    const wrapper = mount(
      <BrowserRouter>
        <SignUp onClick={SignUpClick} />
      </BrowserRouter>
    );
    const inputEvents = {
      username: {
        target: { id: "username", value: "myemail@gmail.com" }
      },
      password: {
        target: { id: "password", value: "password123" }
      },
      confirmPassword: {
        target: { id: "confirmPassword", value: "password123" }
      }
    };
    const usernameInput = wrapper.find("input").at(0),
      passwordInput = wrapper.find("input").at(1),
      confirmPasswordInput = wrapper.find("input").at(2);
    usernameInput.simulate("change", inputEvents.username);
    passwordInput.simulate("change", inputEvents.password);
    confirmPasswordInput.simulate("change", inputEvents.confirmPassword);
    wrapper.find("button").simulate("click");
    expect(SignUpClick).toBeCalledWith(
      "myemail@gmail.com",
      "password123",
      "password123"
    );
  });

  it("should show up a error message if an error is provided", () => {
    const props = {
      onClick: jest.fn(),
      error: {
        title: "This is a error",
        description: "This is the description"
      }
    };
    const wrapper = mount(
      <BrowserRouter>
        <SignUp {...props} />
      </BrowserRouter>
    );
    expect(wrapper.find("ErrorMessage").contains(props.error.title)).toEqual(
      true
    );
  });

  it("shouln't show up an error message if the error doesn't exist", () => {
    const wrapper = mount(
      <BrowserRouter>
        <SignUp onClick={jest.fn()} />
      </BrowserRouter>
    );
    expect(wrapper.find("ErrorMessage").exists()).toEqual(false);
  });
});
