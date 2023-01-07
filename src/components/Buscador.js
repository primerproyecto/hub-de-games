import { PokemonCard } from "../components/PokemonCard";

export const Buscador = (objeto) => {
    const sectionApi = document.querySelector('section.singlePokemon')
    const sectionTodosLosPokemons = document.querySelector('section.pokeApi')
    const pokeapiSearchInput = document.createElement('input')
    const pokeapiSearchButton = document.createElement('button')
    const pokeapiResetButton = document.createElement('button')
    

    pokeapiSearchInput.placeholder = 'Venonat'
    pokeapiSearchInput.id = 'buscar'
    pokeapiSearchButton.innerHTML = '<i data-feather="search"></i> Buscar'
    pokeapiResetButton.innerHTML = '<i data-feather="x"></i> Limpiar'

    const buscarApi = (e) => {
        e.preventDefault();
        const cadenaABuscar = pokeapiSearchInput.value

        const filtrados = objeto.filter( item => item.name.toLowerCase() == cadenaABuscar.toLowerCase())
        // SI TIENE ELEMENTOS DE COINCIDENCIA CON LA BUSQUEDA
        if(filtrados.length != 0) {

          sectionTodosLosPokemons.style.display = 'none'
            
            filtrados.forEach(pokemon => {
                // Obtiene la dirección URL de la imagen del Pokémon
                const pokemonUrl = pokemon.url;
                fetch(pokemonUrl)
                  .then(response => response.json())
                  .then(pokemonInfo => {
                    // Agrega la imagen al documento
                    sectionApi.innerHTML += PokemonCard(pokemonInfo);
                    
                  });
                });
        // S
        }else {
          sectionTodosLosPokemons.style.display = 'none'
            sectionApi.innerHTML = `<h1>NO HAY TAL ' ${cadenaABuscar} ' POKEMON </h1>`;
        }
    }
    pokeapiSearchButton.addEventListener('click', buscarApi)
    pokeapiResetButton.addEventListener('click', (e) => {
      pokeapiSearchInput.placeholder = 'Venonat'
      pokeapiSearchInput.value = ''
      sectionTodosLosPokemons.style.display = 'grid'
      sectionApi.innerHTML = ''
    })

    document.querySelector('fieldset#buscadorPokemon').insertAdjacentElement('afterbegin',pokeapiResetButton)
    document.querySelector('fieldset#buscadorPokemon').insertAdjacentElement('afterbegin',pokeapiSearchButton)
    document.querySelector('fieldset#buscadorPokemon').insertAdjacentElement('afterbegin',pokeapiSearchInput)
}