import { createContext, useState, useEffect } from "react";
import { deckCards as dc } from "../../data/cards";

export const matchContext = createContext();

const _player = {
  username: "pedro",
  range: 250,
  coins: 20,
};

const _oponet = {
  username: "juan",
  range: 220,
  coins: 20,
};

const _planets = [
  {
    name: "Tierra",
    type: "Raro",
    image_pl:
      "https://th.bing.com/th/id/R.c9097aac9d5ec2583927f2ef0dce51c5?rik=96U%2fGTatQ0WJ2A&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fearth-png-transparent%2fearth-png-transparent-20.png&ehk=H7eQJZqk%2f%2bg8GUA9ibL%2fNk6NqODclzckP411jXHFC0E%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    name: "Marte",
    type: "Básico",
    image_pl:
      "https://www.freepnglogos.com/uploads/mars-png/mars-fertile-ground-villanova-magazine-23.png",
  },
  {
    name: "Plutón",
    type: "Popular",
    image_pl:
      "https://th.bing.com/th/id/R.053b8839a3e71c495eb32aa981a1fdba?rik=z9ZjFzkJTwj%2fvw&riu=http%3a%2f%2fwww.pngimagesfree.com%2fNATURE%2fPlanet%2fPluto%2fPluto-Planet-PNG.png&ehk=rbjpfWqfU0syF01E0i3iP%2f%2bb4KUboxZcLxOLR%2bC3PgU%3d&risl=&pid=ImgRaw&r=0",
  },
];

export function MatchContextProvider(props) {
  const [deckCards, setDeckCards] = useState([]);
  const [log, setLog] = useState("");
  const [player, setPlayer] = useState([]);
  const [oponent, setOponent] = useState([]);
  const [planets, setPlanets] = useState([]);

  const isOnline = (_log) => {
    if (false) {
      // TODO: se debe cambiar por la verificación con la base de datos.
      console.log("El oponente se ha desconectado");
      alert("El oponente se desconectó");
      return true;
    } else {
      // TODO: Actualizar log
      return false;
    }
  };

  const uploadLog = (_log) => {
    setLog(_log);
    // TODO: subir el log a la base de datos
  };

  useEffect(() => {
    setDeckCards(dc);
    setPlayer(_player);
    setPlanets(_planets);
    setOponent(_oponet);
  }, []);

  return (
    <matchContext.Provider
      value={{
        deckCards,
        log,
        setLog,
        isOnline,
        uploadLog,
        player,
        planets,
        setPlayer,
        oponent,
        setOponent,
      }}
    >
      {props.children}
    </matchContext.Provider>
  );
}
