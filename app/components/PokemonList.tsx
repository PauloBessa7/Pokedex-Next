"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import CardPokemon from "./Pokemon/CardPokemon";
import CardPokemonSkeleton from "./Pokemon/CardPokemonSkeleton";
import Pagination from "./Pagination/Pagination";
import { TypePagination, Pokemon } from "../types/pokemons";

export default function PokemonList({
  initialPokemons,
  initialPagination,
}: {
  initialPokemons: Pokemon[];
  initialPagination: TypePagination;
}) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleNavigation = (url: string) => {
    startTransition(() => {
      router.push(url);
    });
  };

  return (
    <>
      <ul className="col columns-5 gap-4 mt-8 space-y-4">
        {isPending ? (
          Array.from({ length: 50 }).map((_, i) => (
            <li key={i}>
              <CardPokemonSkeleton />
            </li>
          ))
        ) : (
          initialPokemons.map((pokemon) => (
            <li key={pokemon.name}>
              <CardPokemon
                name={pokemon.name}
                image={pokemon.sprites.front_default}
              />
            </li>
          ))
        )}
      </ul>
      <Pagination
        count={initialPagination.count}
        next={initialPagination.next}
        previous={initialPagination.previous}
        isLoading={isPending}
        onNavigate={handleNavigation}
      />
    </>
  );
}
