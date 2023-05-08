import { useContext, useState } from "react";
import DeckCard from "./DeckCard";
import { waitScreenContext } from "../context/WaitScreenContext";
import WaitCountdown from "./WaitCountdown";

function WaitScreen() {
  const { deckCards } = useContext(waitScreenContext);
  const myStyle = {
    backgroundImage:
      "url('https://media.discordapp.net/attachments/1078073528764604606/1104840043853516880/dalle-image465_1.png?width=880&height=666')",
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <main className="w-screen" style={myStyle}>
      <div className="grid grid-cols-3">
        <div>
          <div className="p-5 text-orange-200 text-center bg-teal-950 bg-opacity-50 rounded-xl fixed" style={{
            marginTop: "20px",
            marginLeft: "20px",
            width: "300px",
          }}>
            <p className="text-2xl pt-2">{"<nombre del usuario>"}</p>
            <p className="text-xl my-1">{"<rango>"}</p>
            <p className="text-lg py-4">
              Será emparejado con jugadores hasta 100 más o menos rango
            </p>
          </div>

          <p
            className="text-center p-6 bg-teal-900 text-xl font-mono text-yellow-50 bg-opacity-50 fixed rounded-xl"
            style={{
              width: "260px",
              marginLeft: "51px",
              marginTop: "370px",
            }}
          >
            Para ganar deberá completar el objetivo del juego: Conquitar al
            menos 2 de los 3 planetas utilizando sus cartas en ellos. Planee
            bien las estrategia ¡y no se quede sin energía!
          </p>
        </div>

        <div className="text-center font-mono">
          <p className="text-5xl mr-20 ml-20 bg-teal-900 p-4 mt-10 text-orange-200 bg-opacity-80 rounded-xl w-72">
            Esperando partida
          </p>
          <div
            className="mt-20 ml-10 bg-center h-96 w-96 bg-cover bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://media.discordapp.net/attachments/1104880725771157526/1104883286926442517/emerald-round.png?width=319&height=340')",
              height: "400px",
            }}
          >
            <p className="text-2xl pt-20">Tiempo restante</p>
            <p className="p-8" style={{ fontSize: "100px" }}>
              <WaitCountdown />
            </p>
            <img
              className="animate-rocket fixed"
              src="https://media.discordapp.net/attachments/1104880725771157526/1104993585507618847/rocket.png?width=666&height=666"
              style={{
                height: "775px",
                width: "775px",
                marginTop: "-520px",
                marginLeft: "-198px",
              }}
            />
          </div>
        </div>
        <div
          className="bg-teal-950 p-8 pt-3 rounded-2xl text-center place-self-center font-mono text-red-300 bg-opacity-80 fixed"
          style={{
            marginLeft: "1000px",
            marginTop: "150px",
            width: "415px",
          }}
        >
          <p className="pb-2 text-3xl">Deck seleccionado</p>
          <p className="pb-5 text-xl">{"<nombre del deck>"}</p>

          <div className="columns-2">
            {deckCards.map((deckCard, i) => (
              <DeckCard
                key={i}
                imagen={deckCard.imagen}
                i={i}
                length={deckCards.length}
                zIndex_={i < deckCards.length / 2 ? i : i - 5}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default WaitScreen;
