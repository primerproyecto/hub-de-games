//data.js
export const data = {
    "juegos": [
        {
            title: "3 en raya",
            link: "/tresenraya",
            image: "https://i.cbc.ca/1.6338027.1643903920!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/susan-mattinson.jpg",
            description: "Esta es la descripción",
            plantilla: '<div id="tresEnRaya-wrapper"><div id="tresEnRaya1__barra"></div><div id="tresEnRaya2__barra"></div><div id="tresEnRaya3__barra"></div><div id="tresEnRaya4_barra"></div><div id="tresEnRaya4_circulo"></div><div id="tresEnRaya4_cruz"></div></div>'
        },
        {
            title: "Poke Api",
            link: "/pokeapi",
            image: "https://i.ytimg.com/vi/yd7_STihkZ4/maxresdefault.jpg",
            description: `<p>Esta es la descripción del ejercicio Pokeapi. En el que a través de la api https://pokeapi.co/ hacemos varios fectchs para mostrar los pokemons en los que se muestra el tipo que son y nos permite filtrar por cada uno de ellos. También se muestra el la experiencia de cada pokemon.</p> <p>Con un buscador de pokemons y unos botones para todos los tipos de pokemons disponibles</p>`,
            plantilla: '<div id="pokemon-wrapper"><div class="semiesfera top"></div><div class="raya"></div><div class="esfera"></div></div>'
        },
        {
            title: "Whaka topo",
            link: "/whakatopo",
            image: "https://i.ytimg.com/vi/PGOPAenfLaU/maxresdefault.jpg",
            description: "Esta es la descripción",
            plantilla: '<div id="wakatopo-wrapper"><div class="circulos"><div class="circulo"></div><div class="circulo"></div><div class="circulo"></div><div class="circulo"></div><div class="circulo"></div><div class="circulo"></div><div class="circulo"></div><div class="circulo"></div><div class="circulo"></div><div class="circulo"></div><div class="circulo"></div><div class="circulo"></div></div><div class="mole"><div class="ojo-izquierdo"></div><div class="ojo-derecho"></div></div></div><div></div></div></div>'
        },
        {
            title: "Ahorcado",
            link: "/ahorcado",
            image: "https://i.ytimg.com/vi/PGOPAenfLaU/maxresdefault.jpg",
            description: "Esta es la descripción",
            plantilla: '<div id="ahorcado-wrapper"><div id="ahorcado__base"></div><div id="ahorcado__mastil"></div><div id="ahorcado__cruz"></div><div id="ahorcado__soga"></div><div id="ahorcado__cabeza"></div><div id="ahorcado__tronco"></div><div id="ahorcado__brazoIzq"></div><div id="ahorcado__brazoDer"></div><div id="ahorcado__piernas"></div></div>'
        },
        {
            title: "Preguntas",
            link: "/preguntas",
            image: "https://i.ytimg.com/vi/PGOPAenfLaU/maxresdefault.jpg",
            description: `<p>Pregunta en inglés generada por el servicio https://opentdb.com/ mediante un fetch.</p>`,
            plantilla: '<div id="preguntas-wrapper"><div class="preguntaCierre big"><div></div><div></div><div></div></div><div class="preguntaCierre big"><div></div><div></div><div></div></div></div>'
        }
    ],
}