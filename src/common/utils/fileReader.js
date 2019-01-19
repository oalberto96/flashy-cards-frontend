import { eventChannel } from "redux-saga";

export const createObjectUrl = file => {
  return eventChannel(emitter => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      emitter(reader.result);
      // emitter(END);
    });
    reader.readAsDataURL(file);
    const unsuscribe = () => {};
    return unsuscribe;
  });
};
