"use client";

import { ReactNode, createContext, useEffect, useState } from "react";
import { Superhero } from "../@types/superhero";

interface IFightData {
  id: number;
  fighters: Superhero[];
  winner: string;
}

interface IHeroesContext {
  fights: IFightData[];
  addFightToHistory: (fight: IFightData) => void;
  removeFightFromHistory: (id: number) => void;
}

export const FightsContext = createContext<IHeroesContext>({
  fights: [],
  addFightToHistory: () => {},
  removeFightFromHistory: () => {},
});

export default function FightsProvider({ children }: { children: ReactNode }) {
  const [fights, setFights] = useState<IFightData[]>([]);

  useEffect(() => {
    setFights(JSON.parse(localStorage.getItem("@metahumans/fights") || "[]"));
  }, []);

  useEffect(() => {
    localStorage.setItem("@metahumans/fights", JSON.stringify(fights));
  }, [fights]);

  function addFightToHistory(fight: IFightData) {
    setFights((prev) => [...prev, fight]);
  }

  function removeFightFromHistory(id: number) {
    setFights((prev) => prev.filter((fight) => fight.id !== id));
  }

  return (
    <FightsContext.Provider
      value={{
        fights,
        addFightToHistory,
        removeFightFromHistory,
      }}
    >
      {children}
    </FightsContext.Provider>
  );
}
