"use client";

import HeroCard from "@/components/ui/heroCard";
import { HeroForm } from "@/components/ui/heroForm";
import { useContext, useEffect, useState } from "react";
import { HeroesContext } from "../providers/heroes";
import { Button } from "@/components/ui/button";
import { SearchXIcon } from "lucide-react";
import Modal from "@/components/ui/modal";
import Loading from "../../components/ui/loading";
import { filterHeroes } from "@/helpers/filterHeroes";
import { Superhero } from "../@types/superhero";

export default function Home() {
  const {
    heroes,
    selectHero,
    selected,
    setOpenModal,
    openModal,
    isLoading,
    selectedFilter,
  } = useContext(HeroesContext);
  const [searchName, setSearchName] = useState("");
  const [name, setName] = useState("");
  const [filter, setFilter] = useState<Superhero[]>([]);

  const filteredByName = filterHeroes(heroes, (hero) =>
    hero.name.toLowerCase().includes(searchName.toLowerCase())
  );

  const clearFilter = () => {
    setSearchName("");
    setName("");
  };

  useEffect(() => {
    function handleLateralFilters() {
      const filterConditions: Record<string, (hero: Superhero) => boolean> = {
        male: (hero) => hero.appearance.gender.toLowerCase() === "male",
        female: (hero) => hero.appearance.gender.toLowerCase() === "female",
        human: (hero) => hero.appearance.race.toLowerCase() === "human",
      };

      if (filterConditions[selectedFilter]) {
        setFilter(filterHeroes(heroes, filterConditions[selectedFilter]));
      } else {
        setFilter([]);
      }
    }

    handleLateralFilters();
  }, [heroes, selectedFilter]);

  return (
    <div>
      <div className="flex items-center justify-center mt-5 gap-2 px-5">
        <HeroForm
          onSearch={(name) => setSearchName(name)}
          name={name}
          setName={setName}
          disabled={isLoading}
        />
        {searchName && (
          <Button onClick={clearFilter}>
            <SearchXIcon size={18} />
          </Button>
        )}
        <p className="text-white">{openModal}</p>
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Modal openModal={openModal} setOpenModal={setOpenModal} />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 p-5">
            {filter.length > 0 ? (
              filter.map((hero) => (
                <HeroCard
                  hero={hero}
                  key={hero.id}
                  onClick={() => selectHero(hero)}
                  isSelected={hero.name === selected[0]?.name}
                />
              ))
            ) : searchName ? (
              filteredByName.length > 0 ? (
                filteredByName.map((hero) => (
                  <HeroCard
                    hero={hero}
                    key={hero.id}
                    onClick={() => selectHero(hero)}
                    isSelected={hero.name === selected[0]?.name}
                  />
                ))
              ) : (
                <div className="absolute flex w-full items-center justify-center">
                  <p className="text-center font-medium opacity-75 mt-6">
                    No results found :(
                  </p>
                </div>
              )
            ) : (
              heroes.map((hero) => (
                <HeroCard
                  hero={hero}
                  key={hero.id}
                  onClick={() => selectHero(hero)}
                  isSelected={hero.name === selected[0]?.name}
                />
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
}
