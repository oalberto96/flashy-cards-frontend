import React from "react";
import ConceptList from "../ConceptList";
import { shallow } from "enzyme";

const fakeConcepts = [
  {
    id: 2,
    cardA: {
      text: "awdasd",
      media: null,
      audio: null
    },
    cardB: {
      text: "asdasd",
      media: null,
      audio: null
    }
  }
];

describe("ConceptList", () => {
  it("should render the delete concept button", () => {
    const props = {
      concepts: fakeConcepts,
      setCardText: jest.fn(),
      setCardImage: jest.fn(),
      deleteConcept: jest.fn()
    };
    const wrapper = shallow(<ConceptList {...props} />);
    expect(wrapper.find("div.close-button").exists()).toEqual(true);
  });

  it("should call the delete concept function", () => {
    const props = {
      concepts: fakeConcepts,
      setCardImage: jest.fn(),
      setCardText: jest.fn(),
      deleteConcept: jest.fn()
    };

    const wrapper = shallow(<ConceptList {...props} />);
    wrapper
      .find("div.close-button")
      .at(0)
      .simulate("click");
    expect(props.deleteConcept).toBeCalledWith(fakeConcepts[0].id);
  });
});
