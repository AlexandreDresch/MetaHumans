"use client";

import { HeroesContext } from "@/app/providers/heroes";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useContext, useState } from "react";
import { Label } from "./label";

export default function SearchForm() {
  const { selectedFilter, setSelectedFilter } = useContext(HeroesContext);
  const [selected, setSelected] = useState("");

  function onSubmit() {
    setSelectedFilter(selected);
  }

  return (
    <form className="w-full space-y-6 mt-2">
      <h2 className="opacity-75">Filter by...</h2>

      <RadioGroup
        onValueChange={(value) => setSelected(value)}
        defaultValue={selectedFilter}
        className="flex flex-col space-y-1 gap-3"
      >
        <div className="flex items-center space-x-3 space-y-0">
          <RadioGroupItem value="humans" id="humans" />

          <Label className="font-normal" htmlFor="humans">
            Humans
          </Label>
        </div>

        <div className="flex items-center space-x-3 space-y-0">
          <RadioGroupItem value="male" id="male" />

          <Label className="font-normal" htmlFor="male">
            Male
          </Label>
        </div>

        <div className="flex items-center space-x-3 space-y-0">
          <RadioGroupItem value="female" id="female" />

          <Label className="font-normal" htmlFor="female">
            Female
          </Label>
        </div>

        <div className="flex items-center space-x-3 space-y-0">
          <RadioGroupItem value="" id="default" />

          <Label className="font-normal" htmlFor="default">
            No filters
          </Label>
        </div>
      </RadioGroup>

      <Button type="button" onClick={() => onSubmit()}>
        <span>Filter</span>
      </Button>
    </form>
  );
}
