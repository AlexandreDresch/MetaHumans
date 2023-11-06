import { useContext } from "react";
import { ScrollArea } from "./scroll-area";
import BattleCard from "./battleCard";
import { HeroesContext } from "@/app/providers/heroes";

export function BattleHistory() {
  const { fights } = useContext(HeroesContext);

  return (
    <div className="flex h-full flex-col gap-5 overflow-hidden mt-5">
      <ScrollArea className="h-full">
        <div className="flex h-full flex-col gap-2">
          {fights.length > 0 ? (
            fights.map((fight) => (
              <BattleCard key={fight.id} battleData={fight} />
            ))
          ) : (
            <p className="text-center font-medium opacity-75 mt-6">
              Your battle history is empty.
            </p>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
