import React from "react";
import { mount } from "enzyme";
import CardForm from "../CardForm";

describe("CardForm component", () => {
  it("should render the cardId in the file input", () => {
    const props = {
      cardId: "1A",
      cardText: "",
      setCardImage: jest.fn(),
      setCardText: jest.fn()
    };
    const wrapper = mount(<CardForm {...props} />);
    const inputWrapper = wrapper
      .find("input")
      .findWhere(n => n.prop("type") === "file");
    expect(inputWrapper.prop("id")).toEqual("cardImage1A");
  });

  // TODO: adapt to use the CDN getURL function in agent.js
  // it("should render an image given the cardMedia object ", () => {
  //   const props = {
  //     cardId: "1A",
  //     setCardImage: jest.fn(),
  //     setCardText: jest.fn(),
  //     cardMedia: {
  //       mediaType: {
  //         id: 1,
  //         name: "IMAGE"
  //       },
  //       source: "image.png"
  //     }
  //   };
  //   const wrapper = mount(<CardForm {...props} />);
  //   const image = wrapper.findWhere(
  //     n => n.type() === "img" && n.prop("alt") === "concept"
  //   );
  //   expect(image.prop("src")).toEqual(props.cardMedia.source);
  // });

  it("should call the function setCardImage", () => {
    const file = "dummy.file";
    global.URL = { createObjectURL: x => file };
    const props = {
      cardId: "1A",
      setCardImage: jest.fn(),
      setCardText: jest.fn()
    };
    const event = {
      target: {
        files: ["dummy.file"]
      }
    };
    const wrapper = mount(<CardForm {...props} />);
    const fileInput = wrapper.find("input").last();
    fileInput.simulate("change", event);
    expect(props.setCardImage).toBeCalledWith(file);
  });

  it("should call the function setCardText", () => {
    const props = {
      cardId: "1A",
      setCardImage: jest.fn(),
      setCardText: jest.fn()
    };
    const event = {
      target: {
        id: "cardText",
        value: "new text"
      }
    };
    const wrapper = mount(<CardForm {...props} />);
    const input = wrapper.find("#cardText").first();
    input.simulate("focus");
    input.simulate("change", event);
    input.simulate("blur");
    expect(props.setCardText).toBeCalledWith("new text");
  });
});
