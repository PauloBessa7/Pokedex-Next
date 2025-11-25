"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
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
  const searchParams = useSearchParams();
  const [pokemons, setPokemons] = useState<Pokemon[]>(initialPokemons);
  const [pagination, setPagination] = useState<TypePagination>(initialPagination);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const offset = parseInt(searchParams.get("offset") || "0");
    const limit = parseInt(searchParams.get("limit") || "50");

    if (offset === 0) {
      setPokemons(initialPokemons);
      setPagination(initialPagination);
      return;
    }

    setIsLoading(true);
    
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
      .then(res => res.json())
      .then(data => {
        const pokemonsData: Pokemon[] = data.results.map((pokemon: any, index: number) => {
          const id = offset + index + 1;
          return {
            id,
            name: pokemon.name,
            sprites: {
              front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
            },
          };
        });

        setPokemons(pokemonsData);
        setPagination({
          count: data.count,
          next: data.next,
          previous: data.previous,
        });
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [searchParams, initialPokemons, initialPagination]);

  const handleNavigation = (url: string) => {
    window.history.pushState({}, "", url);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <>
      <ul className="col columns-5 gap-4 mt-8 space-y-4">
        {isLoading ? (
          Array.from({ length: 50 }).map((_, i) => (
            <li key={i}>
              <CardPokemonSkeleton />
            </li>
          ))
        ) : (
          pokemons.map((pokemon) => (
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
        count={pagination.count}
        next={pagination.next}
        previous={pagination.previous}
        isLoading={isLoading}
        onNavigate={handleNavigation}
      />
    </>
  );
}
