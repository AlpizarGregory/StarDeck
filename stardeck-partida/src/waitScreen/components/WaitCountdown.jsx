import Countdown from "react-countdown";
import React from "react";

function WaitCountdown() {
  const Complete = () => {

    return (
      <>
        <span className="text-5xl text-red-500">Saliendo</span>
        {/*<meta http-equiv="Refresh" content="0; url='../'" />*/}
      </>
    );
  };
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
