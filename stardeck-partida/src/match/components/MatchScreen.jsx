import { useContext, useState, useEffect } from "react";
import Planet from "./Planet";
import Card from "./Card";
import { matchContext } from "../context/MatchContext";
import MatchCountdown from "./MatchCountdown";

function MatchScreen() {
  const { deckCards, log, player, planets, setPlayer, oponent, setOponent } =
    useContext(matchContext);
  //const [handCards, setHandCards] = useState(selector);

  useEffect(() => {
    //setHandCards(selector(deckCards));
  }, []);

  const fixLog = () => {
    console.log("log: " + log);
    newLog = "";
    log.split(";").map((__log) => {
      newLog = newLog + __log + "'<br/>'";
    });
    console.log(newLog);
    return newLog;
  };

  return (
    <>
      <img
        className="fixed"
        src="https://media.discordapp.net/attachments/1104880725771157526/1105210702391681114/dalle-image482.png?width=666&height=666"
        style={{
          width: "1700px",
          marginTop: "-300px",
          zIndex: 0,
        }}
      />
      <div
        className="bg-cyan-950 mt-10 ml-2 rounded-xl bg-opacity-60 backdrop-blur-sm text-center font-mono text-teal-300 p-3 fixed"
        style={{
          width: "250px",
          height: "170px",
        }}
      >
        <h1 className="text-xl mt-6">{"Tú: " + player.username}</h1>
        <h1 className="text-lg">{"Rango: " + player.range}</h1>
        <h1 className="text-lg">{"Monedas: " + player.coins}</h1>
      </div>
      <div
        className="bg-gray-400 bg-opacity-40 rounded-3xl ml-2 backdrop-blur-sm p-4 font-mono fixed"
        style={{
          height: "500px",
          width: "250px",
          marginTop: "250px",
        }}
      >
        <h1 className="text-center text-lg">Log de partida</h1>
        <div>
          <textarea
            className="bg-transparent w-56 h-96 resize-none"
            disabled={true}
            value={log.replace(/;/g, "\n")}
            style={{
              scrollbarColor: "transparent",
            }}
          />
          <hr />
          <MatchCountdown />
        </div>
      </div>
      <div
        className="bg-cyan-950 mt-10 rounded-xl bg-opacity-60 backdrop-blur-sm text-center font-mono text-violet-400 p-3 fixed"
        style={{
          width: "250px",
          height: "170px",
          marginLeft: "1400px",
        }}
      >
        <h1 className="text-xl mt-6">{"Oponente: " + oponent.username}</h1>
        <h1 className="text-lg">{"Rango: " + oponent.range}</h1>
      </div>
      <div>
        {planets.map((planet, i) => (
          <div
            key={"planet-div-" + (i + 1)}
            className="bg-cyan-800 bg-opacity-70 rounded-3xl backdrop-blur12 border-8 text-center text-slate-300 fixed"
            style={{
              height: "500px",
              width: "300px",
              zIndex: 1,
              marginTop: "20px",
              marginLeft: 270 + 400 * i,
            }}
          >
            <h1 className="mt-7 text-2xl px-2">{planet.name}</h1>
            <h1
              className="mt-4 text-xl"
              style={{
                color:
                  planet.type === "Popular"
                    ? "white"
                    : planet.type === "Básico"
                    ? "greenyellow"
                    : planet.type === "Raro"
                    ? "#FF6FED"
                    : "",
              }}
            >
              {planet.type}
            </h1>
            <Planet key={"planet-" + i} image={planet.image_pl} mt={20} ml={45} />
            <h1 className="mt-48 text-xl pt-10">Estado de captura</h1>
            <div
              className="bg-sky-950 w-60 h-8 rounded-md"
              style={{
                marginLeft: "20px",
                marginTop: "20px",
              }}
            >
              <div
                className="bg-emerald-600 h-8 rounded-md"
                style={{
                  width: (240 * i * 10) / 100 + "px", // TODO: hace falta añadir el estado de conquista del planeta, se sustituye por i*10.
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div
        className="fixed bg-slate-800 bg-opacity-70 rounded-lg border-4 border-slate-900 backdrop-blur-sm text-center py-3 px-12 "
        style={{
          height: "270px",
          width: "1000px",
          marginTop: "530px",
          marginLeft: "320px",
        }}
      >
        <h1 className="font-mono text-2xl text-cyan-200">Mano de cartas</h1>
        <div
          className="grid grid-cols-7 gap-3 fixed"
          style={{
            height: "170px",
            width: "880px",
          }}
        >
          {deckCards
            .slice(0, 7)
            .map(() => {
              return deckCards.splice(
                Math.floor(Math.random() * deckCards.length),
                1
              )[0];
            }, deckCards.slice())
            .map((card, i) => (
              <Card key={card.key} image={card.imagen} />
            ))}
        </div>
      </div>
    </>
  );
}

export default MatchScreen;
