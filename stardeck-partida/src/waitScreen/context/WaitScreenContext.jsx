import { createContext, useState, useEffect } from "react";
import { deckCards as deCards } from "../../data/cards";

export const waitScreenContext = createContext();
const _player = {
  username: "pedro",
  range: 250,
  coins: 20,
};

export function WaitScreenContextProvider(props) {
  const [deckCards, setDeckCards] = useState([]);
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    setDeckCards(deCards);
    setPlayer(_player);
  }, []);

  return (
    <waitScreenContext.Provider value={{ deckCards, player, setPlayer }}>
      {props.children}
    </waitScreenContext.Provider>
  );
}
