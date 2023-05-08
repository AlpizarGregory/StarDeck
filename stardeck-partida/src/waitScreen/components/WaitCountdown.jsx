import Countdown from "react-countdown";

import React from "react";

function WaitCountdown() {
  const Complete = () => <span className="text-2xl text-red-700">Saliendo...</span>;
  const renderer = ({ seconds, completed }) => {
    if (completed) {
      return <Complete />;
    } else {
      return <span>{seconds} s</span>;
    }
  };
  return <Countdown date={Date.now() + 20000} renderer={renderer}></Countdown>;
}

export default WaitCountdown;
