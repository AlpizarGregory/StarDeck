import React from "react";
import { matchContext } from "../context/MatchContext";

function Card({ image, id }) {
  console.log(image);
  return (
    <img id={id}
      src={image} className="rounded-md"
      style={{
        height: "200px",
        width: "200px",
      }}
    />
  );
}

export default Card;
