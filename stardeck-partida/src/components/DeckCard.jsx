import React, { useContext } from "react";

function DeckCard({ imagen, style }) {
  return <img className="rounded-lg w-52" src={imagen} style={ style } />;
}

export default DeckCard;
