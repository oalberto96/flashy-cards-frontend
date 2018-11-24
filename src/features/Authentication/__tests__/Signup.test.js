import React from "react";
import { mount } from "enzyme";
import SignUp from "../SignUp";

describe("SignUp component", () => {
  it("should contain a textinput for username", () => {
    const wrapper = mount(<SignUp onClick={jest.fn()} />);
    expect(wrapper.find("TextInput").contains("Email")).toEqual(true);
  });

  it("should contain a textinput for password", () => {
    const wrapper = mount(<SignUp onClick={jest.fn()} />);
    expect(wrapper.find("TextInput").contains("Password")).toEqual(true);
  });

  it("should contain a textinput to confirm password", () => {
    const wrapper = mount(<SignUp onClick={jest.fn()} />);
    expect(wrapper.find("TextInput").find("#confirmPassword").length).toEqual(
      1
    );
  });

  it("shouldn't call the register function if the passwords aren't the same ", () => {
    const SignUpClick = jest.fn();
    const wrapper = mount(<SignUp onClick={SignUpClick} />);
    const inputEvents = {
      username: {
        target: { id: "username", value: "myemail@gmail.com" }
      },
      password: {
        target: { id: "password", value: "password123" }
      },
      confirmPassword: {
        target: { id: "confirmPassword", value: "passwo1d23" }
      }
    };
    const usernameInput = wrapper.find("input").at(0),
      passwordInput = wrapper.find("input").at(1),
      confirmPasswordInput = wrapper.find("input").at(2);
    usernameInput.simulate("change", inputEvents.username);
    passwordInput.simulate("change", inputEvents.password);
    confirmPasswordInput.simulate("change", inputEvents.confirmPassword);
    wrapper.find("button").simulate("click");
    expect(SignUpClick).toHaveBeenCalledTimes(0);
  });

  it("shouldn't call the register function if the username is empty", () => {
    const SignUpClick = jest.fn();
    const wrapper = mount(<SignUp onClick={SignUpClick} />);
    const inputEvents = {
      username: {
        target: { id: "username", value: "" }
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
    expect(SignUpClick).toHaveBeenCalledTimes(0);
  });

  it("should call the SignUp function", () => {
    const SignUpClick = jest.fn();
    const wrapper = mount(<SignUp onClick={SignUpClick} />);
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
    expect(SignUpClick).toBeCalledWith("myemail@gmail.com", "password123");
  });
});
