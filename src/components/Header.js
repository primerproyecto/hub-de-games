import {SwitchTheme} from './SwitchTheme'

const template = () => `
<nav>
    <a href="/" data-link><h1>Hub de juegos</h1></a>
    <a href="#" onclick="${SwitchTheme()}">Cambiar</a>
</nav>
`;

export const listeners = () => {
  document.querySelector("header").innerHTML = template();
};