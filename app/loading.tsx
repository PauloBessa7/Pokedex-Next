import CardPokemonSkeleton from "./components/Pokemon/CardPokemonSkeleton";

export default function Loading() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1 className="text-3xl font-bold underline">Pokedex</h1>
      <ul className="col columns-5 gap-4 mt-8 space-y-4">
        {Array.from({ length: 50 }).map((_, i) => (
          <li key={i}>
            <CardPokemonSkeleton />
          </li>
        ))}
      </ul>
    </main>
  );
}
