import React from "react";
import { create } from "react-test-renderer";

import PlayConcept from "../PlayConcept";

describe("PlayConcept Component", () => {
  it("should render correctly", () => {
    const PlayConceptComponent = create(
      <PlayConcept cardA={{}} cardB={{}} />
    ).toJSON();
    expect(PlayConceptComponent).toMatchSnapshot();
  });
});
