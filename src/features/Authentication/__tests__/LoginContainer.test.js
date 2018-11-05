import React from "react";
import { mount } from "enzyme";
import { LoginContainer, mapDispatchToProps } from "../LoginContainer";
import { requestLogin } from "../LoginContainer/actions";

describe("LoginContainer component", () => {
  describe("the container element", () => {
    describe("should render a Login component", () => {
      const containerWrapper = mount(<LoginContainer onClick={jest.fn()} />);
      expect(containerWrapper.find("Login").exists()).toEqual(true);
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
  });
});
