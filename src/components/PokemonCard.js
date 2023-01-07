
export const PokemonCard = (objeto) => {
    
    if(objeto) {
        const pokemonTipos = objeto.types
        
        return `
            <article class="pokemonapi">
                <h3>${objeto.name}</h3>
                <div class="pokemonExperiencia">${objeto.base_experience}</div>
                <figure>
                ${objeto.sprites.other.home.front_default ? `<img src="${objeto.sprites.other.home.front_default}" alt="${objeto.name}" />`: ``}
                    
                </figure>
                <ul class="botonoesFiltraTipos">
                    ${pokemonTipos.map(tipo => `
                    <li><button class="efectoEnlace enlaceTipoColor" data-type="${tipo.type.name}">${tipo.type.name}<span aria-hidden="true">${tipo.type.name}</span></button>
                    `).join("\n")}
                </ul>
            </article>
        `
    }
    
    
}
