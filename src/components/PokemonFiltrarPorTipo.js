import { PokemonCard } from "../components/PokemonCard";

export const FiltrarPorTipo = (objeto) => {
  const sectionApiFilterTipo = document.querySelector("#filterByType");
  const tiposUnicos = [];

  const getData = () => {
    fetch("https://pokeapi.co/api/v2/type")
      .then((response) => response.json())
      .then((data) => {
        const types = data.results;
        // aquí puedes iterar sobre la lista de tipos y hacer lo que necesites con ellos
        types.forEach((type) => {
          if (type.name != "shadow" && type.name != "unknown") {
            feather.replace();
            const enlaceTipo = ` 
              <a class="pokemonTipoLink efectoEnlace" href="${type.url}" data-type="${type.name}" title="Todos los pokemons del tipo ${type.name}">
                <i data-feather="filter"></i> 
                ${type.name}
                <span aria-hidden="true"><i data-feather="filter"></i> 
                ${type.name}</span>
              </a>`;
            sectionApiFilterTipo.innerHTML += enlaceTipo;
          }
        });
        const pillarDatosDeTipo = (e) => {
          e.preventDefault();

          if (e.target.classList.contains("pokemonTipoLink")) {
            // Quitamos la clase activo cada vez que hagan click en un enlace
            const enlacesViejo = document.querySelectorAll(".activo");
            enlacesViejo.forEach((item) => {
              item.classList.remove("activo");
            });
            //agregamos la clase activa
            e.target.classList.add("activo");

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
