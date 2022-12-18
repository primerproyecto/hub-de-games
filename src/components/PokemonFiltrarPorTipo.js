import { PokemonCard } from "../components/PokemonCard";

export const FiltrarPorTipo = (objeto) => {
  const sectionApiFilterTipo = document.querySelector("#filterByType");
  const tiposUnicos = [];

  /* objeto.forEach(pokemon => {
        // Obtiene la dirección URL de la imagen del Pokémon
        const pokemonUrl = pokemon.url;
        fetch(pokemonUrl)
          .then(response => response.json())
          .then(pokemonInfo => {
            // Agrega la imagen al documento
            pokemonInfo.types.map(tipo => {
                console.log(tipo.type.name)
                console.log('tiene el array ',tiposUnicos.includes(tipo.type.name))
                if(!tiposUnicos.includes(tipo.type.name)) {
                    tiposUnicos.push(tipo.type.name)
                    sectionApiFilterTipo.innerHTML += ` ${tipo.type.name}`
                }
            })
            
          });
        }); */

  const getData = () => {
    fetch("https://pokeapi.co/api/v2/type")
      .then((response) => response.json())
      .then((data) => {
        const types = data.results;
        // aquí puedes iterar sobre la lista de tipos y hacer lo que necesites con ellos
        types.forEach((type) => {
          const enlaceTipo = ` <a class="pokemonTipoLink" href="${type.url}" data-type="${type.name}" title="Todos los pokemons del tipo ${type.name}">${type.name}</a>`;
          sectionApiFilterTipo.innerHTML += enlaceTipo;
        });
        const pillarDatosDeTipo = (e) => {
          e.preventDefault();

          if (e.target.classList.contains("pokemonTipoLink")) {

            fetch(e.target.href)
              .then((response) => response.json())
              .then((data) => {
                const pokemons = data.pokemon;
                const sectionApi = document.querySelector(".pokeApi");
                sectionApi.innerHTML = "";

                pokemons.forEach((pokemon) => {
                  fetch(pokemon.pokemon.url)
                    .then((response) => response.json())
                    .then((data) => {
                      sectionApi.innerHTML += PokemonCard(data);
                    });
                });
              });
          }
        };

        sectionApiFilterTipo.addEventListener("click", pillarDatosDeTipo);
      });
  };

  getData();
};
