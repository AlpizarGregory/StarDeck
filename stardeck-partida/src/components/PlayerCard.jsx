import React from "react";
function PlayerCard() {
  return (
    <div style={{
        marginTop: "-1670px",
    }}>
      <div
        className="p-5 text-orange-200 text-center bg-teal-950 backdrop-blur-sm bg-opacity-50 rounded-xl fixed"
        style={{
          marginTop: "20px",
          marginLeft: "20px",
          width: "400px",
        }}
      >
        <p className="text-3xl pt-2">{"Tiquillo"}</p>
        <p className="text-xl my-1">{"Rango: 220"}</p>
        <p className="text-lg py-4 px-3">
          Será emparejado con jugadores hasta 100 más o menos rango
        </p>
      </div>
    </div>
  );
}

export default PlayerCard;
