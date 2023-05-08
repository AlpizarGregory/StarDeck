import React, { useContext } from "react";

function DeckCard({ imagen, i, length }) {
  return (
    <img
      className="rounded-lg w-52"
      src={imagen}
      style={{
        zIndex: i < length / 2 ? i : i - 5,
        marginTop: ((i < length / 2 ? i : i - 5) === 0 ? 0 : -200) + "px",
      }}
    />
  );
}

export default DeckCard;
