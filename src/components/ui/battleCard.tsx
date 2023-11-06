import { Button } from "./button";
import { TrashIcon } from "lucide-react";
import { useContext } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import { HeroesContext, IFightData } from "@/app/providers/heroes";
import { Card } from "./card";
import StatsDetails from "./statsDetails";

interface BattleCardProps {
  battleData: IFightData;
}

export default function BattleCard({ battleData }: BattleCardProps) {
  const { removeFightFromHistory } = useContext(HeroesContext);

  return (
    <Card className="px-5">
      <Accordion type="single" className="w-full" collapsible>
        <AccordionItem value={battleData.id.toString()}>
          <AccordionTrigger>
            <div className="flex flex-col gap-1 text-left">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-justify">
                  {battleData.fighters[0].name}{" "}
                  <span className="text-primary">x </span>
                  {battleData.fighters[1].name}
                </p>
              </div>
              <span className="text-sm opacity-75">
                Winner {battleData.winner}
              </span>
            </div>
          </AccordionTrigger>

          <AccordionContent>
            <div className="flex flex-col gap-4">
              <StatsDetails fighters={battleData.fighters} />
            </div>

            <Button
              className="w-full mt-2"
              type="button"
              onClick={() => removeFightFromHistory(battleData.id)}
            >
              <TrashIcon />
            </Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}
