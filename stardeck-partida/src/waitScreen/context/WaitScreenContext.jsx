import { createContext, useState, useEffect } from "react";
import { deckCards as deCards } from "../../data/cards";

export const waitScreenContext = createContext();

export function WaitScreenContextProvider(props) {
  const [deckCards, setDeckCards] = useState([]);

  useEffect(() => {
    setDeckCards(deCards);
  }, []);

  return (
    <waitScreenContext.Provider value={{ deckCards }}>
      {props.children}
    </waitScreenContext.Provider>
  );
}
