import React from "react";
import Login from "../Login";
import { mount, shallow } from "enzyme";

describe("Login component", () => {
  it("should render a TextInput for login", () => {
    const loginWrapper = mount(<Login onClick={jest.fn()} />);
    expect(loginWrapper.find("TextInput").contains("Email")).toEqual(true);
  });

  it("shoudl render a TextInput for password", () => {
    const loginWrapper = mount(<Login onClick={jest.fn()} />);
    expect(loginWrapper.find("TextInput").contains("Password")).toEqual(true);
  });

  it("should render a input of password type for the password", () => {
    const loginWrapper = mount(<Login onClick={jest.fn()} />);
    const textInputWrapper = loginWrapper.find("TextInput").at(1);
    const input = textInputWrapper.find("input").at(0);
    expect(input.props().type).toEqual("password");
  });

  it("should render a login button", () => {
    const loginWrapper = mount(<Login onClick={jest.fn()} />);
    expect(loginWrapper.find("button").exists()).toEqual(true);
  });

  it("should call a function at press the login button", () => {
    const loginClick = jest.fn();
    const loginWrapper = mount(<Login onClick={loginClick} />);
    const usernameEvent = {
      target: { id: "username", value: "myemail@gmail.com" }
    };
    const passwordEvent = {
      target: { id: "password", value: "password123" }
    };
    const usernameInput = loginWrapper.find("input").at(0);
    usernameInput.simulate("change", usernameEvent);
    const passwordInput = loginWrapper.find("input").at(1);
    passwordInput.simulate("change", passwordEvent);
    loginWrapper.find("button").simulate("click");
    expect(loginClick).toBeCalledWith("myemail@gmail.com", "password123");
  });
});
