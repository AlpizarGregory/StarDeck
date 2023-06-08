import React from "react";

function PlayButton() {
  return (
    <div className="fixed">
      <a href="./waitScreen/index.html">
        <button
          className="bg-red-600 bg-opacity-50 rounded-md p-5 text-center text-orange-100 font-extrabold text-6xl"
          style={{
            marginTop: "600px",
            marginLeft: "615px",
          }}
        >
          Buscar partida
        </button>
      </a>
    </div>
  );
}

export default PlayButton;
