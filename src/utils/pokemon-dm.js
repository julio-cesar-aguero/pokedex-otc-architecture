export class PokemonDm {
  static async getPokemons(limit = 20) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
    const data = await response.json();

    return data.results.map((pokemon, index) => {
      const id = index + 1;
      return {
        id: id,
        name: pokemon.name,
        // Usamos la imagen oficial de alta calidad
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
        url: pokemon.url
      };
    });
  }
}