import React from "react";
import { BrowserRouter } from "react-router-dom";
import { mount } from "enzyme";
import {
  LoginContainer,
  mapDispatchToProps,
  mapStateToProps
} from "../LoginContainer";
import { requestLogin } from "../LoginContainer/actions";

describe("LoginContainer component", () => {
  describe("the container element", () => {
    describe("should render a Login component when user is not authenticated", () => {
      const props = {
        onClick: jest.fn(),
        isAuthenticated: false
      };
      const containerWrapper = mount(
        <BrowserRouter>
          <LoginContainer {...props} />
        </BrowserRouter>
      );
      expect(containerWrapper.find("Login").exists()).toEqual(true);
    });

    describe("should redirect to the main screen when user is authenticated", () => {
      const props = {
        onClick: jest.fn(),
        isAuthenticated: true
      };
      const containerWrapper = mount(
        <BrowserRouter>
          <LoginContainer {...props} />
        </BrowserRouter>
      );
      expect(containerWrapper.find("Redirect").exists()).toEqual(true);
    });

    describe("mapDispatchToProps", () => {
      describe("should map dispatch to props correctly", () => {
        it("should map login function", () => {
          const dispatch = jest.fn();
          const componentDispatch = mapDispatchToProps(dispatch, {});
          componentDispatch.onClick();
          expect(dispatch).toBeCalledWith(
            expect.objectContaining(requestLogin())
          );
        });
      });
    });

    describe("mapStateToProps", () => {
      it("should map isAuthenticated state", () => {
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
});
