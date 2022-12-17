import { PokemonCard } from "../components/PokemonCard";

export const Buscador = (objeto) => {
    const sectionApi = document.querySelector('section.pokeApi')
    const pokeapiSearchLabel = document.createElement('label')
    const pokeapiSearchInput = document.createElement('input')
    const pokeapiSearchButton = document.createElement('button')
    

    pokeapiSearchInput.placeholder = 'Venonat'
    pokeapiSearchInput.id = 'buscar'
    pokeapiSearchButton.innerHTML = 'Buscar'
    pokeapiSearchLabel.innerHTML = 'Buscar'
    pokeapiSearchLabel.setAttribute('for', 'buscar')

    const buscarApi = (e) => {
        e.preventDefault();
        const cadenaABuscar = pokeapiSearchInput.value

        const filtrados = objeto.filter( item => item.name.toLowerCase() == cadenaABuscar.toLowerCase())
        // SI TIENE ELEMENTOS DE COINCIDENCIA CON LA BUSQUEDA
        if(filtrados.length != 0) {
            // VACIO EL CONTENEDOR SECTION PARA MOSTRAR RESULTADOS COINCIDENTES
            sectionApi.innerHTML = `ESTE BICHO ES' ${cadenaABuscar} '`;
            
            filtrados.forEach(pokemon => {
                // Obtiene la dirección URL de la imagen del Pokémon
                console.log('que es pokemon', pokemon)
                const pokemonUrl = pokemon.url;
                fetch(pokemonUrl)
                  .then(response => response.json())
                  .then(pokemonInfo => {
                    console.log('que es pokemon', pokemonInfo)
                    // Agrega la imagen al documento
                    sectionApi.innerHTML += PokemonCard(pokemonInfo);
                    
                  });
                });
        // S
        }else {
            sectionApi.innerHTML = `NO HAY TAL ' ${cadenaABuscar} ' PUTO BICHO `;
        }
    }
    pokeapiSearchButton.addEventListener('click', buscarApi)

    document.querySelector('section#buscadorPokemon').insertAdjacentElement('beforebegin',pokeapiSearchLabel)
    document.querySelector('section#buscadorPokemon').insertAdjacentElement('beforebegin',pokeapiSearchInput)
    document.querySelector('section#buscadorPokemon').insertAdjacentElement('beforebegin',pokeapiSearchButton)
    console.log('desde el buscador', objeto)
}