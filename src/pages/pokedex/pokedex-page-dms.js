import { PokemonDm } from '../../utils/pokemon-dm.js';

export const PokedexPageDms = (SuperClass) => class extends SuperClass {
  
  async _fetchPokemons() {
    this.isLoading = true;
    try {
      const data = await PokemonDm.getPokemons(151); // Traemos los 151 originales
      this._onSuccess(data);
    } catch (error) {
      console.error(error);
      this.isLoading = false;
    }
  }

  _onSuccess(data) {
    this.pokemonList = data;
    this.isLoading = false;
  }

  // CÉLULA DE ACCIÓN: Maneja el input del usuario
  _onSearchInput(e) {
    const text = e.target.value;
    this.searchText = text;
  }
};