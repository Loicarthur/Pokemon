import Image from 'next/image';
import Link from 'next/link';

interface Pokemon {
  name: string;
  weight: number;
  height: number;
  sprites: {
    front_default: string;
  };
}

async function getPokemon(id: string): Promise<Pokemon | null> {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      cache: 'force-cache'
    });
    if (!res.ok) throw new Error();
    return res.json();
  } catch {
    return null;
  }
}

type Props = {
  params: Promise<{ id: string }>;
};

export default async function PokemonPage({ params }: Props) {
  const id = (await params).id;
  const pokemon = await getPokemon(id);

  if (!pokemon) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold text-red-500">Pokémon non trouvé</h1>
        <p className="text-lg text-gray-600 mt-4">
          Désolé, nous n'avons pas trouvé ce Pokémon.
        </p>
        <Link href="/" className="text-blue-500 hover:underline mt-6 block">
          ← Retour à la liste
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 capitalize">
        {pokemon.name}
      </h1>
      <div className="flex justify-center mb-8">
        <Image
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          width={200}
          height={200}
          priority
        />
      </div>
      <div className="text-center">
        <p className="text-xl">Poids : {pokemon.weight} hectogrammes</p>
        <p className="text-xl">Taille : {pokemon.height} décimètres</p>
      </div>
      <div className="text-center mt-6">
        <Link href="/" className="text-blue-500 hover:underline">
          ← Retour à la liste
        </Link>
      </div>
    </div>
  );
}
