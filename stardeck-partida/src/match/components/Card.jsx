import React from "react";
import { matchContext } from "../context/MatchContext";

function Card({ image }) {
  console.log(image);
  return (
    <img
      src={image} className="rounded-md"
      style={{
        height: "200px",
        width: "200px",
      }}
    />
  );
}

export default Card;
