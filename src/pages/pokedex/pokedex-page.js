import { CellsPage } from '../../cells-page-mock.js';

// 1. IMPORTACIÓN: Traemos el objeto de estilos
import styles from './pokedex-page-styles.js';

// Importamos los otros tejidos (que SÍ son Mixins)
import { PokedexPageDms } from './pokedex-page-dms.js';
import { PokedexPageTpls } from './pokedex-page-tpls.js';

export class PokedexPage extends PokedexPageTpls(
  PokedexPageDms(CellsPage)
) {
  static get is() { return 'pokedex-page'; }

  // 2. CONEXIÓN: Definimos que este componente usa esos estilos
  static get styles() {
    return [ styles ];
  }

  static get properties() {
    return {
      pokemonList: { type: Array },
      isLoading: { type: Boolean },
      searchText: { type: String }
    };
  }

  constructor() {
    super();
    this.pokemonList = [];
    this.isLoading = false;
    this.searchText = '';
  }

  firstUpdated() {
    this._fetchPokemons();
  }
}

customElements.define(PokedexPage.is, PokedexPage);