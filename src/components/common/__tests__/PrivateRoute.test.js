import React from "react";
import { mount } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import { PrivateRoute } from "../PrivateRoute";

describe("PrivateRoute component", () => {
  it("should redirect to login if state is not authenticated and cookies donesn't exist ", () => {
    const props = {
      isAuthenticated: false
    };
    const componentWrapper = mount(
      <BrowserRouter>
        <PrivateRoute {...props} />
      </BrowserRouter>
    );
    expect(componentWrapper.find("Redirect").prop("to")).toEqual("/login");
  });
  it("should render a Route if state is authenticated", () => {
    const props = {
      path: "/lessons",
      isAuthenticated: true
    };
    const componentWrapper = mount(
      <BrowserRouter>
        <PrivateRoute {...props} />
      </BrowserRouter>
    );
    expect(componentWrapper.find("Route").prop("path")).toEqual(props.path);
  });
});
