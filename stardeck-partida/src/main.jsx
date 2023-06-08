import React from "react";
import ReactDOM from "react-dom/client";
import PlayerCard from "./components/PlayerCard.jsx";
import Background from "./components/Background.jsx";
import DeckList from "./components/DeckList.jsx";
import PlayButton from "./components/PlayButton.jsx";
import Logo from "./components/Logo.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="font-mono">
      <Background />
      <PlayerCard />
      <Logo />
      <DeckList />
      <PlayButton />
      <a
        href="./waitScreen/index.html"
        className="fixed"
        style={{
          marginTop: "750px",
        }}
      >
        Pantalla de espera
      </a>
      <br />
      <a
        href="./match/index.html"
        className="fixed"
        style={{
          marginTop: "750px",
        }}
      >
        Partida
      </a>
    </div>
  </React.StrictMode>
);
