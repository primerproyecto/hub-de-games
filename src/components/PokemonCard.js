export const PokemonCard = (objeto) => {
    console.log('que es el objeto', objeto)
    const pokemonTipos = objeto.types
    console.log
    return `
        <article class="pokemonapi">
            <h3>${objeto.name} - <span>${objeto.species.name}</span></h3>
            <figure>
                <img src="${objeto.sprites.other.home.front_default}" alt="${objeto.name}" />
            </figure>
            <ul class="botonoesFiltraTipos">
                ${pokemonTipos.map(tipo => `
                <li><button data-type="${tipo.type.name}">${tipo.type.name}</button>
                `).join("\n")}
            </ul>
        </article>
    `
}
