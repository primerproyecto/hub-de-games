import "./pokeApi.css";
import { PokemonCard } from "../components/PokemonCard";
import { Buscador } from "../components/Buscador";


export const template = () => `
<section class="pokeapi">
    <h2>Poke api 👋🏻</h2>
    <div id="pokemon-wrapper">
        <div class="semiesfera top"></div>
        <div class="raya"></div>
        <div class="esfera"></div>
    </div>
    <section id="buscadorPokemon"></section>
    <section class="pokeApi"></section>
    </section>
`;

// CREAR FUNCION PARA IMPRIMIRLOS POR PANTALLA

const pokeApiListeners = () => {
    const sectionApi = document.querySelector('.pokeApi')
    console.log('entramos en la lógica del juego pokeapi')
    const POKEAPIURL = "https://pokeapi.co/api/v2/pokemon/";
    const cantidadPokemon = 15;

    fetch(`${POKEAPIURL}?limit=${cantidadPokemon}`)
    .then(response => response.json())
    .then(pokemonData => {
        // Obtiene la lista de Pokémon
        const pokemonList = pokemonData.results;

        pokemonList.forEach(pokemon => {
            // Obtiene la dirección URL de la imagen del Pokémon
            const pokemonUrl = pokemon.url;
            fetch(pokemonUrl)
              .then(response => response.json())
              .then(pokemonInfo => {
                // Agrega la imagen al documento
                sectionApi.innerHTML += PokemonCard(pokemonInfo);
                
              });
            });
            Buscador(pokemonList)
            

            const Filtrar = (objeto) => {
                console.log('desde filtrar',objeto)
                const filtradoPorTipo = (e) => {
                    if(e.target.type == 'submit') {
                        console.log(e.target.dataset.type)
                        console.log(objeto)

                        const filtrados = objeto.filter( item => item.name.toLowerCase() == e.target.dataset.type)

                        
                    }
                }
               
                
                sectionApi.addEventListener('click', filtradoPorTipo)
                
            }
            Filtrar(pokemonList)
    });
}
    
export const listeners = (pokemons) => {
    pokeApiListeners()
}





