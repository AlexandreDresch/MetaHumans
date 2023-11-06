"use client";

import { ReactNode, createContext, useEffect, useState } from "react";
import { Superhero } from "../@types/superhero";
import { getHeroesData } from "@/lib/getHeroesData";
import { calculateHeroStats } from "@/helpers/calculateHeroStats";
import { generateRandomId } from "@/helpers/generateRandomId";

interface IHeroesContext {
  heroes: Superhero[];
  selected: Superhero[];
  selectHero: (selected: Superhero) => void;
  fights: IFightData[];
  addFightToHistory: (fight: IFightData) => void;
  removeFightFromHistory: (id: number) => void;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  battleData: IFightData;
  isLoading: boolean;
  selectedFilter: string;
  setSelectedFilter: React.Dispatch<React.SetStateAction<string>>;
}

export interface IFightData {
  id: number;
  fighters: Superhero[];
  winner: string;
}

export const HeroesContext = createContext<IHeroesContext>({
  heroes: [],
  selected: [],
  selectHero: () => {},
  fights: [],
  addFightToHistory: () => {},
  removeFightFromHistory: () => {},
  openModal: false,
  setOpenModal: () => {},
  battleData: {
    id: 0,
    fighters: [],
    winner: "",
  },
  isLoading: false,
  selectedFilter: "",
  setSelectedFilter: () => {},
});

export default function HeroesProvider({ children }: { children: ReactNode }) {
  const [heroes, setHeroes] = useState<Superhero[]>([]);
  const [selected, setSelected] = useState<Superhero[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [fights, setFights] = useState<IFightData[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [battleData, setBattleData] = useState<IFightData>({
    id: 0,
    fighters: [],
    winner: "",
  });

  useEffect(() => {
    async function fetchHeroesData() {
      try {
        setIsLoading(true);
        const data = await getHeroesData();
        setHeroes(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching hero data", error);
      }
    }

    fetchHeroesData();
  }, []);

  useEffect(() => {
    setFights(JSON.parse(localStorage.getItem("@metahumans/fights") || "[]"));
  }, []);

  useEffect(() => {
    localStorage.setItem("@metahumans/fights", JSON.stringify(fights));
  }, [fights]);

  function addFightToHistory(fight: IFightData) {
    setFights((prev) => [...prev, fight]);
    setOpenModal(false);
  }

  function removeFightFromHistory(id: number) {
    setFights((prev) => prev.filter((fight) => fight.id !== id));
  }

  function selectHero(hero: Superhero) {
    if (selected.length === 0) {
      setSelected([hero]);
    } else if (selected.length === 1) {
      const [h1] = selected;
      const h2 = hero;
      const w = calculateHeroStats(h1) > calculateHeroStats(h2) ? h1 : h2;
      const id = generateRandomId(1, 9999);
      const data = { id: id, fighters: [h1, h2], winner: w.name };
      setBattleData(data);
      setSelected([]);
      setOpenModal(true);
    }
  }

  return (
    <HeroesContext.Provider
      value={{
        heroes,
        selected,
        selectHero,
        fights,
        addFightToHistory,
        removeFightFromHistory,
        openModal,
        setOpenModal,
        battleData,
        isLoading,
        selectedFilter,
        setSelectedFilter,
      }}
    >
      {children}
    </HeroesContext.Provider>
  );
}
