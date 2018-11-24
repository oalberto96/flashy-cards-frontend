import React from "react";
import { mount } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import { SignUpContainer } from "../SignUpContainer";
import { mapDispatchToProps, mapStateToProps } from "../SignUpContainer";
import { requestSignUp } from "../SignUpContainer/actions";

describe("SignUpContainer", () => {
  describe("the container element", () => {
    describe("should render a SignUp if user is not authenticated", () => {
      const props = {
        onClick: jest.fn(),
        isAuthenticated: false
      };
      const wrapper = mount(
        <BrowserRouter>
          <SignUpContainer {...props} />
        </BrowserRouter>
      );
      expect(wrapper.find("SignUp").exists()).toEqual(true);
    });

    describe("should redirect to dashboard is user is authenticated", () => {
      const props = {
        onClick: jest.fn(),
        isAuthenticated: true
      };
      const wrapper = mount(
        <BrowserRouter>
          <SignUpContainer {...props} />
        </BrowserRouter>
      );
      expect(wrapper.find("Redirect").exists()).toEqual(true);
    });
  });

  describe("mapDispatchToProps", () => {
    describe("should map dispatch to props correctly", () => {
      it("should map sign up function", () => {
        const dispatch = jest.fn();
        const userData = {
          username: "mail@gmail.com",
          password: "password123"
        };
        const componentDispatch = mapDispatchToProps(dispatch, {});
        componentDispatch.onClick(userData.username, userData.password);
        expect(dispatch).toBeCalledWith(
          expect.objectContaining(
            requestSignUp(userData.username, userData.password)
          )
        );
      });
    });
  });

  describe("mapStateToProps", () => {
    it("should map is Authenticated state", () => {
      const state = {
        authentication: {
          isAuthenticated: false
        }
      };
      const componentState = mapStateToProps(state, {});
      expect(componentState.isAuthenticated).toEqual(false);
    });
  });
});
