export async function getHeroesData() {
  const res = await fetch(process.env.NEXT_PUBLIC_DATABASE_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
