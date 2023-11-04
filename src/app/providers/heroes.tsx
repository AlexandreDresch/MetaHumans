"use client";

import { ReactNode, createContext, useEffect, useState } from "react";
import { Superhero } from "../@types/superhero";
import { getHeroesData } from "@/lib/getHeroesData";

interface IHeroesContext {
  heroes: Superhero[];
}

export const HeroesContext = createContext<IHeroesContext>({
  heroes: [],
});

export default function HeroesProvider({ children }: { children: ReactNode }) {
  const [heroes, setHeroes] = useState<Superhero[]>([]);

  useEffect(() => {
    async function fetchHeroesData() {
      try {
        const data = await getHeroesData();
        setHeroes(data);
      } catch (error) {
        console.error("Error fetching hero data", error);
      }
    }

    fetchHeroesData();
  }, []);

  return (
    <HeroesContext.Provider value={{ heroes }}>
      {children}
    </HeroesContext.Provider>
  );
}
