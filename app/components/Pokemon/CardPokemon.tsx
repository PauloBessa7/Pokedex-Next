import Image from "next/image";
import Link from "next/link";

export default function CardPokemon(pokemon: { name: string; image: string }) {
  return (
    <Link href={`/Pokemon/${pokemon.name}`}>
      <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-900/70 backdrop-blur-xl shadow-xl hover:shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 transition-all duration-300 hover:scale-105 hover:-translate-y-2">
        {/* Efeito de brilho no hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full" style={{ transition: 'transform 0.8s' }}></div>

        {/* Container da imagem com fundo colorido */}
        <div className="relative mb-4 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 p-4 group-hover:scale-110 transition-transform duration-300">
          <Image
            src={pokemon.image}
            alt={pokemon.name}
            width={130}
            height={130}
            className="drop-shadow-lg"
            unoptimized
            loading="lazy"
          />
        </div>

        {/* Nome do Pokémon */}
        <p className="text-xl font-bold capitalize text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          {pokemon.name}
        </p>

        {/* Indicador visual de "clique aqui" */}
        <div className="mt-3 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Ver detalhes →</span>
        </div>
      </div>
    </Link>
  );
}
