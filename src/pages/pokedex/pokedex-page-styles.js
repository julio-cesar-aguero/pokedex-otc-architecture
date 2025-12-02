import { css } from 'lit';

// Exportamos el objeto CSS directamente (sin Mixin)
export default css`
  :host {
    display: block;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f4f4f4;
    min-height: 100vh;
  }

  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 40px 20px;
    text-align: center;
  }
  
  h1 {
    color: #333;
    margin-bottom: 30px;
    font-size: 2.5rem;
  }

  /* --- BUSCADOR --- */
  .search-box {
    margin-bottom: 30px;
  }

  .search-box input {
    width: 100%;
    max-width: 400px;
    padding: 15px;
    border: 2px solid #ddd;
    border-radius: 30px;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s;
  }

  .search-box input:focus {
    border-color: #646cff;
    box-shadow: 0 0 8px rgba(100, 108, 255, 0.2);
  }

  /* --- GRID DE POKEMON --- */
  .pokemon-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 25px;
  }

  /* --- TARJETA (CARD) --- */
  .card {
    background: white;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  }
  
  .card img {
    width: 120px;
    height: 120px;
    object-fit: contain;
    z-index: 1;
    position: relative;
  }
  
  .card h3 { 
    text-transform: capitalize; 
    margin: 15px 0 5px 0; 
    color: #444; 
    font-size: 1.2rem; 
  }
  
  .number { 
    position: absolute; 
    top: 10px; 
    right: 15px; 
    font-weight: bold; 
    color: #e0e0e0; 
    font-size: 2rem; 
    z-index: 0;
  }

  .loading {
    font-size: 1.5rem;
    color: #666;
    margin-top: 50px;
  }
`;