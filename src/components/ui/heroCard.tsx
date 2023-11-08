import Image from "next/image";
import { Dna } from "lucide-react";
import { Superhero } from "@/app/@types/superhero";
import { Badge } from "./badge";
import { Card } from "./card";

interface HeroProps {
  hero: Superhero;
  onClick: () => void;
  isSelected: boolean;
}
export default function HeroCard({ hero, onClick, isSelected }: HeroProps) {
  return (
    <Card
      className={`flex flex-col gap-2 rounded-lg bg-accent hover:scale-105 transition-transform cursor-pointer ${
        isSelected && "border-[1px] border-primary"
      }`}
      onClick={onClick}
    >
      <div className="flex min-h-60 w-full items-center justify-center ">
        <Image
          src={hero.images.md ? hero.images.md : hero.images.lg}
          height={0}
          width={0}
          sizes="100vw"
          className="h-full w-full object-cover rounded-lg bg-accent"
          alt={hero.name}
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-1">
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-md font-semibold">
          {hero.name}
        </p>
        <div className="flex items-center mb-1">
          <Badge variant="heading">
            <Dna size={16} />{" "}
            <span>
              {hero.appearance.race ? hero.appearance.race : "Not Available"}
            </span>
          </Badge>
        </div>
      </div>
    </Card>
  );
}
