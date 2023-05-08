import { createContext, useState, useEffect } from "react";
import { deckCards as deCards } from "../../data/cards";

export const matchContext = createContext();

export function MatchContextProvider(props) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(deCards);
  }, []);

  return (
    <matchContext.Provider value={cards}>{props.children}</matchContext.Provider>
  );
}
