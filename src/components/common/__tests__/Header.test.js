import React from "react";
import { create } from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import Header from "../Header";

describe("Header Component", () => {
  it("should render header correctly", () => {
    const HeaderComponent = create(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    ).toJSON();
    expect(HeaderComponent).toMatchSnapshot();
  });
});
