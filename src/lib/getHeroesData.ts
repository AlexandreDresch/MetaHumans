export async function getHeroesData() {
  const res = await fetch(
    "http://homologacao3.azapfy.com.br/api/ps/metahumans"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}


