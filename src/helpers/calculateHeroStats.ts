import { Superhero } from "@/app/@types/superhero";

export function calculateHeroStats(hero: Superhero) {
  const powerStats = Object.values(hero.powerstats);
  const totalPower = powerStats.reduce(
    (total, stat) => total + Number(stat),
    0
  );
  return totalPower;
}
