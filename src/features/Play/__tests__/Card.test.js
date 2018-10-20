import React from "react";
import { create } from "react-test-renderer";
import Card from "../Card";

describe("Card Component", () => {
  it("should render correctly", () => {
    const CardComponent = create(
      <Card cardText={"test"} flipCard={() => {}} />
    ).toJSON();
    expect(CardComponent).toMatchSnapshot();
  });
});
