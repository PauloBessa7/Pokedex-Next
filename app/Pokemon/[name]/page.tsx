import Image from "next/image";

async function fetchPokemon(name: string): Promise<any> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
    cache: "no-store",
  });
  return await res.json();
}

export default async function Page({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const pokemon = await fetchPokemon(name);

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl font-bold capitalize">{pokemon.name}</h1>
      <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={530} height={530} />
    </div>
  );
}
