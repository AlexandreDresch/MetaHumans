"use client";

import HeroCard from "@/components/ui/heroCard";
import { HeroForm } from "@/components/ui/heroForm";
import { useContext, useState } from "react";
import { HeroesContext } from "../providers/heroes";
import { Button } from "@/components/ui/button";
import { SearchXIcon } from "lucide-react";

export default function Home() {
  const { heroes } = useContext(HeroesContext);
  const [searchName, setSearchName] = useState("");
  const [name, setName] = useState(""); 

  const filteredHeroes = heroes.filter((hero) =>
    hero.name.toLowerCase().includes(searchName.toLowerCase())
  );

  const clearFilter = () => {
    setSearchName("");
    setName("");
  };

  return (
    <div className="">
      <div className="flex items-center justify-center mt-5 gap-2">
        <HeroForm onSearch={(name) => setSearchName(name)} name={name} setName={setName} />
        {searchName && (
          <Button onClick={clearFilter}>
            <SearchXIcon size={18}/> Clear Filter
          </Button>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 p-5">
        {searchName
          ? filteredHeroes.map((hero) => <HeroCard hero={hero} key={hero.id} />)
          : heroes.map((hero) => <HeroCard hero={hero} key={hero.id} />)}
      </div>
    </div>
  );
}
