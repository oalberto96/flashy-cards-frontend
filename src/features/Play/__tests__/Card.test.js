import React from "react";
import { create } from "react-test-renderer";
import { mount } from "enzyme";
import Card from "../Card";

describe("Card Component", () => {
  it("should render correctly", () => {
    const CardComponent = create(
      <Card cardText={"test"} flipCard={() => {}} />
    ).toJSON();
    expect(CardComponent).toMatchSnapshot();
  });

  it("should call flipCard function", () => {
    const flipCard = jest.fn(),
      props = {
        cardText: "text",
        flipCard
      };
    const CardComponent = mount(<Card {...props} />);
    CardComponent.simulate("click");
    expect(flipCard).toHaveBeenCalled();
  });

  it("should show the cardText", () => {
    const props = {
      cardText: "text",
      flipCard: jest.fn()
    };
    const CardWrapper = mount(<Card {...props} />);
    expect(CardWrapper.contains("text")).toEqual(true);
  });

  it("should render an image", () => {
    const props = {
      cardText: "text",
      flipCard: jest.fn(),
      cardMedia: {
        mediaType: { name: "IMAGE" },
        source: "image.png"
      }
    };
    const CardWrapper = mount(<Card {...props} />);
    expect(CardWrapper.find("img").prop("src")).toEqual("image.png");
  });

  it("should render the alternate text of an image", () => {
    const props = {
      cardText: "text",
      flipCard: jest.fn(),
      cardMedia: {
        mediaType: { name: "IMAGE" },
        source: "image.png"
      }
    };
    const CardWrapper = mount(<Card {...props} />);
    expect(CardWrapper.find("img").prop("alt")).toEqual("text");
  });
});
