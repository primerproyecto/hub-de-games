import "./pokeApi.css";
import { PokemonCard } from "../components/PokemonCard";
import { data } from "../data/data";
import { Buscador } from "../components/Buscador";
import { FiltrarPorTipo } from "../components/PokemonFiltrarPorTipo";
import { homelisteners } from "../pages/Home";

export const template = () => `
<div class="pokeWrapper">
    <h2>Poke api <span
    class="wave"
    role="img"
    aria-label="Saludos"
  >
    👋
  </span></h2>

  <details>
    <summary>Buscar Pokemon por nombre</summary>
    <fieldset id="buscadorPokemon"></fieldset>
  </details>
  
  
  <details>
    <summary>Filtrar por tipo de Pokemon</summary>
    <fieldset id="filterByType"></fieldset>
  </details>
    
    
    <section class="pokeApi"></section>
    <section class="singlePokemon"></section>
    <div class="pokelogo cargando">
        <div id="pokemon-wrapper">
          <div class="semiesfera top"></div>
          <div class="raya"></div>
          <div class="esfera"></div>
        </div>
      </div>
    </div>
`;

// CREAR FUNCION PARA IMPRIMIRLOS POR PANTALLA

const pokeApiListeners = () => {
  const sectionApi = document.querySelector(".pokeApi");
  const POKEAPIURL = "https://pokeapi.co/api/v2/pokemon/";
  const cantidadPokemon = 15;
  const cargandoNodo = document.querySelector('.pokelogo')
  

  fetch(`${POKEAPIURL}?limit=${cantidadPokemon}`)
    .then((response) => response.json())
    .then((pokemonData) => {
      // Obtiene la lista de Pokémon
      const pokemonList = pokemonData.results;

      pokemonList.forEach((pokemon) => {
       
        // Obtiene la dirección URL de la imagen del Pokémon
        const pokemonUrl = pokemon.url;
        fetch(pokemonUrl)
          .then((response) => response.json())
          .then((pokemonInfo) => {
            // Agrega la imagen al documento
            cargandoNodo.classList.remove('cargando')
            sectionApi.innerHTML += PokemonCard(pokemonInfo);
          });
      });
      Buscador(pokemonList);

      // FILTRAR DESDE LOS POKEMONS
      Filtrar(pokemonList);
      FiltrarPorTipo(pokemonList);
      
    });
};

const Filtrar = (objeto) => {
  const sectionApi = document.querySelector(".pokeApi");

  const filtradoPorTipo = (e) => {
    if (e.target.type == "submit") {
      sectionApi.innerHTML = "";
      fetch(`https://pokeapi.co/api/v2/type/${e.target.dataset.type}`)
        .then((response) => response.json())
        .then((pokemonInfo) => {
          pokemonInfo.pokemon.forEach((item) => {
            fetch(item.pokemon.url)
              .then((response) => response.json())
              .then((pokemonInfo2) => {
                sectionApi.innerHTML += PokemonCard(pokemonInfo2);
              });
          });
        });
    }
  };
  sectionApi.addEventListener("click", filtradoPorTipo);
};
export const listeners = (pokemons) => {
  pokeApiListeners();

  const divDescripcion = document.createElement('section')
  divDescripcion.classList.add('descripcion')

  const juegoPokeApiData = data.juegos.filter((juego) => {
    return juego.title == 'Poke Api'
  })


  divDescripcion.innerHTML = juegoPokeApiData[0].description

  const ancla = document.querySelector('div > h2')
  ancla.insertAdjacentElement('afterend', divDescripcion )
  feather.replace()
};
