export const PokemonCard = (objeto) => {
    if(objeto) {
        const pokemonTipos = objeto.types
        return `
            <article class="pokemonapi">
                <h3>${objeto.name} - <span>${objeto.base_experience}</span></h3>
                <figure>
                    <img src="${objeto.sprites ? objeto.sprites.other.home.front_default : ''}" alt="${objeto.name}" />
                </figure>
                <ul class="botonoesFiltraTipos">
                    ${pokemonTipos.map(tipo => `
                    <li><button data-type="${tipo.type.name}">${tipo.type.name}</button>
                    `).join("\n")}
                </ul>
            </article>
        `
    }
    
}
