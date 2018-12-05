import React from "react";
import { mount } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import Login from "../Login";

describe("Login component", () => {
  it("should render a TextInput for login", () => {
    const loginWrapper = mount(
      <BrowserRouter>
        <Login onClick={jest.fn()} />
      </BrowserRouter>
    );
    expect(loginWrapper.find("TextInput").contains("Email")).toEqual(true);
  });

  it("shoudl render a TextInput for password", () => {
    const loginWrapper = mount(
      <BrowserRouter>
        <Login onClick={jest.fn()} />
      </BrowserRouter>
    );
    expect(loginWrapper.find("TextInput").contains("Password")).toEqual(true);
  });

  it("should render a input of password type for the password", () => {
    const loginWrapper = mount(
      <BrowserRouter>
        <Login onClick={jest.fn()} />
      </BrowserRouter>
    );
    const textInputWrapper = loginWrapper.find("TextInput").at(1);
    const input = textInputWrapper.find("input").at(0);
    expect(input.props().type).toEqual("password");
  });

  it("should render a login button", () => {
    const loginWrapper = mount(
      <BrowserRouter>
        <Login onClick={jest.fn()} />
      </BrowserRouter>
    );
    expect(loginWrapper.find("button").exists()).toEqual(true);
  });

  it("should call a function at press the login button", () => {
    const loginClick = jest.fn();
    const loginWrapper = mount(
      <BrowserRouter>
        <Login onClick={loginClick} />
      </BrowserRouter>
    );
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

  it("should render a error message if a error login exist", () => {
    const props = {
      onClick: jest.fn(),
      error: { title: "login error", message: "the account doesn't exist" }
    };
    const wrapper = mount(
      <BrowserRouter>
        <Login {...props} />
      </BrowserRouter>
    );
    expect(wrapper.contains("login error")).toEqual(true);
  });

  it("shouldn't render a error message if a error isn't provided", () => {
    const wrapper = mount(
      <BrowserRouter>
        <Login onClick={jest.fn()} />
      </BrowserRouter>
    );
    expect(wrapper.find("ErrorMessage").exists()).toEqual(false);
  });
});
