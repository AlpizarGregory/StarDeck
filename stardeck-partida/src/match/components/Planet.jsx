import React from "react";

function Planet({ image, id, mt, ml }) {
  return (
    <img
      className="fixed"
      src={image}
      style={{
        marginTop: mt + "px",
        marginLeft: ml + "px",
        zIndex: 2,
        width: "200px",
      }}
    />
  );
}

export default Planet;
