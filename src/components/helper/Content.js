import React from "react";
import Li from "./Li";

const Content = (props) => {
  const data = [
    {
      h5: "Clear, confident communication",
      tiny: "Take the guesswork out of great writing.",
    },
    {
      h5: "Comprehensive real-time feedback",
      tiny: "Effective writing takes more than good grammar.",
    },
    {
      h5: "Support you can rely on",
      tiny: "Write with a second pair of eyes that never gets tired.",
    },
    {
      h5: "Strike the right tone",
      tiny: "Make the best impression, every time.",
    },
  ];


  return (
    <ul>
      {data.map((cont, index) => {
        return <Li key={index} h5={cont.h5} tiny={cont.tiny} active={props.slideNum == index ? "active" : ""} />;
      })}
    </ul>
  );
};

export default Content;
