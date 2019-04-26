import React from "react";

const Lesson = ({ name, description }) => {
  return (
    <div className="">
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Lesson;
