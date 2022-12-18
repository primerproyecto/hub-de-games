import "./pokeApi.css";
import { PokemonCard } from "../components/PokemonCard";
import { Buscador } from "../components/Buscador";
import {FiltrarPorTipo} from "../components/PokemonFiltrarPorTipo"


export const template = () => `
<section class="pokeapi">
    <h2>Poke api 👋🏻</h2>
    <div id="pokemon-wrapper">
        <div class="semiesfera top"></div>
        <div class="raya"></div>
        <div class="esfera"></div>
    </div>
    <section id="buscadorPokemon"></section>
    <section id="filterByType"></section>
    <section class="pokeApi"></section>
    </section>
`;

// CREAR FUNCION PARA IMPRIMIRLOS POR PANTALLA

const pokeApiListeners = () => {
    const sectionApi = document.querySelector('.pokeApi')
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
    
    // FILTRAR DESDE LOS POKEMONS

    
    Filtrar(pokemonList)
    FiltrarPorTipo(pokemonList)
    });
}

const Filtrar = (objeto) => {
    const sectionApi = document.querySelector('.pokeApi')
                
    const filtradoPorTipo = (e) => {
        if(e.target.type == 'submit') {
            sectionApi.innerHTML = '';
            fetch(`https://pokeapi.co/api/v2/type/${e.target.dataset.type}`)
                .then(response => response.json())
                .then(pokemonInfo => {

                    pokemonInfo.pokemon.forEach( item => {
                        console.log(item)
                        fetch(item.pokemon.url)
                            .then(response => response.json())
                            .then(pokemonInfo2 => {
                                console.log(pokemonInfo2)
                                sectionApi.innerHTML += PokemonCard(pokemonInfo2);
                                
                            });
                    })


                    
                    
                    // Agrega la imagen al documento
                   // sectionApi.innerHTML += PokemonCard(pokemonInfo);
                    
                });

            

            
        }
    }
   
    
    sectionApi.addEventListener('click', filtradoPorTipo)
    
}
    

export const listeners = (pokemons) => {
    pokeApiListeners()
}





