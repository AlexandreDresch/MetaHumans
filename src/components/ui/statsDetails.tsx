import { Separator } from "./separator";
import { Superhero } from "@/app/@types/superhero";

interface StatsDetailsProps {
  fighters: Superhero[];
}

export default function StatsDetails({ fighters }: StatsDetailsProps) {
  return (
    <div className="flex w-full flex-col gap-1 text-xs">
      <Separator />

      <div className="flex w-full justify-between py-3 gap-1">
        <p>{fighters[0].powerstats.intelligence}</p>
        <p>Intelligence</p>
        <p>{fighters[1].powerstats.intelligence}</p>
      </div>

      <Separator />

      <div className="flex w-full justify-between py-3">
        <p>{fighters[0].powerstats.strength}</p>
        <p>Strength</p>
        <p>{fighters[1].powerstats.strength}</p>
      </div>

      <Separator />

      <div className="flex w-full justify-between py-3">
        <p>{fighters[0].powerstats.speed}</p>
        <p>Speed</p>
        <p>{fighters[1].powerstats.speed}</p>
      </div>

      <Separator />

      <div className="flex w-full justify-between py-3">
        <p>{fighters[0].powerstats.durability}</p>
        <p>Durability</p>
        <p>{fighters[1].powerstats.durability}</p>
      </div>

      <Separator />

      <div className="flex w-full justify-between py-3">
        <p>{fighters[0].powerstats.power}</p>
        <p>Power</p>
        <p>{fighters[1].powerstats.power}</p>
      </div>

      <Separator />

      <div className="flex w-full justify-between py-3">
        <p>{fighters[0].powerstats.combat}</p>
        <p>Combat</p>
        <p>{fighters[1].powerstats.combat}</p>
      </div>
    </div>
  );
}
