import Image from "next/image";
import Link from "next/link";
import { PokemonList } from "@/types/pokemon";

async function getPokemonList() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  // appel de l'API avec un seul pokemon pour tester
  // const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  
  if (!res.ok) throw new Error("Failed to fetch Pokemon");
  return res.json() as Promise<PokemonList>;
}

export default async function Home() {
  const pokemonList = await getPokemonList();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Pokédex</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pokemonList.results.map((pokemon, index) => {
          const pokemonId = index + 1;
          const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
          
          return (
            <Link
              href={`/pokemon/${pokemonId}`}
              key={pokemon.name}
              className="block bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-4"
            >
              <div className="aspect-square relative mb-4">
                <Image
                  src={imageUrl}
                  alt={pokemon.name}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              <div className="text-center">
                <h2 className="text-xl font-semibold capitalize">
                  {pokemon.name}
                </h2>
                <p className="text-gray-600">#{pokemonId.toString().padStart(3, "0")}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
