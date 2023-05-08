import Countdown from "react-countdown";

import React from "react";

function WaitCountdown() {
  const Complete = () => <span>Saliendo</span>;
  return (
    <Countdown date={Date.now() + 20000}>
      <Complete />
    </Countdown>
  );
}

export default WaitCountdown;
