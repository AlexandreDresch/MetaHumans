import { Superhero } from "@/app/@types/superhero";

export function filterHeroes(
  heroes: Superhero[],
  condition: (hero: Superhero) => boolean
) {
  return heroes.filter(condition);
}
