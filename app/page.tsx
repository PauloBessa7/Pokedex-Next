import PokemonList from "./components/PokemonList";
import { TypePagination, Pokemon } from "./types/pokemons";

async function getPokemons(
  offset: number = 0,
  limit: number = 50
): Promise<[Pokemon[], TypePagination]> {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`,
    {
      cache: "force-cache",
    }
  );
  const pokemonsOptions = await response.json();

  const pokemonsData: Pokemon[] = pokemonsOptions.results.map((pokemon: any, index: number) => {
    const id = offset + index + 1;
    return {
      id,
      name: pokemon.name,
      sprites: {
        front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
      },
    };
  });

  const pagination: TypePagination = {
    count: pokemonsOptions.count,
    next: pokemonsOptions.next,
    previous: pokemonsOptions.previous,
  };

  return [pokemonsData, pagination];
}

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ offset?: string; limit?: string }>;
}) {
  const params = await searchParams;
  const offsetNum = parseInt(params.offset || "0");
  const limitNum = parseInt(params.limit || "50");
  const [pokemons, pagination] = await getPokemons(offsetNum, limitNum);

  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1 className="text-3xl font-bold underline">Pokedex</h1>
      <PokemonList initialPokemons={pokemons} initialPagination={pagination} />
    </main>
  );
}
