import {SwitchTheme} from './SwitchTheme'

const template = () => `
<nav>
    <a href="/" data-link><h1>Hub de juegos</h1></a>
    <a href="" onclick="${SwitchTheme()}">Cambiar</a>
</nav>
`;

export const listeners = () => {
  document.querySelector("header").innerHTML = template();
};

{/* <nav>
    <a href="/" data-link><h1>Hub de juegos</h1></a>
    <a href="/tresenraya" data-link>Tres en raya</a>
    <a href="/pokeapi" data-link>Poke api</a>
    <a href="/ahorcado" data-link>Ahorcado</a>
    <a href="/pokeapi" data-link>Poke api</a>
    <a href="/preguntas" data-link>Preguntas</a>
    <a href="" onclick="${SwitchTheme()}">Cambiar</a>
</nav> */}