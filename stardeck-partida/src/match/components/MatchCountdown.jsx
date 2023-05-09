import React, { useState, useEffect } from "react";
import { matchContext } from "../context/MatchContext";

const MatchCountdown = () => {
  const [countdown, setCountdown] = useState(20);
  const [text, setText] = useState("Tu turno");
  const [color, setColor] = useState("red");

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((countdown) => countdown - 1);
    }, 1000);

    if (countdown === 0) {
      clearInterval(interval);

      if (text === "Tu turno") {
        setText("Oponente");
        setCountdown(20);
        setColor("darkgreen");
      } else {
        setText("Tu turno");
        setCountdown(20);
        setColor("red");
      }
    }

    return () => clearInterval(interval);
  }, [countdown, text]);

  return (
    <h2
      className="text-center text-2xl bg-slate-400 rounded-lg mt-3"
      style={{
        color,
      }}
    >
      {text}: {countdown + " s"}
    </h2>
  );
};

export default MatchCountdown;
