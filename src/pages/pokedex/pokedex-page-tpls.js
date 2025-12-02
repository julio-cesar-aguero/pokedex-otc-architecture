import { html } from 'lit';

export const PokedexPageTpls = (SuperClass) => class extends SuperClass {
  render() {
    const filteredList = this.pokemonList.filter(p => 
      p.name.toLowerCase().includes(this.searchText.toLowerCase())
    );

    return html`
      <div class="container">
        <h1>🧬 Pokedex Architecture</h1>
        
        ${this._tplSearch()}

        ${this.isLoading 
          ? this._tplLoading() 
          : this._tplPokemonGrid(filteredList) // Pasamos la lista filtrada
        }
      </div>
    `;
  }

  // NUEVA CÉLULA ESPECIALISTA: El Input de Búsqueda
  _tplSearch() {
    return html`
      <div class="search-box">
        <input 
          type="text" 
          placeholder="🔍 Buscar Pokémon..." 
          .value="${this.searchText}"
          @input="${this._onSearchInput}"
        >
      </div>
    `;
  }

  // Modificamos la grid para que acepte una lista dinámica
  _tplPokemonGrid(list) {
    if (list.length === 0) return html`<p>No se encontraron Pokémon 😢</p>`;
    
    return html`
      <div class="pokemon-grid">
        ${list.map(pokemon => this._tplCard(pokemon))}
      </div>
    `;
  }

  _tplLoading() {
    return html`<div class="loading">Cargando datos... ⏳</div>`;
  }

 

  _tplCard(pokemon) {
    return html`
      <div class="card">
        <span class="number">#${pokemon.id}</span>
        <img src="${pokemon.image}" alt="${pokemon.name}" loading="lazy">
        <h3>${pokemon.name}</h3>
      </div>
    `;
  }
};