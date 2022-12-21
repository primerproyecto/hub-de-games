import {SwitchTheme} from './SwitchTheme'
import { Logout } from '../utils/utils';
const template = () => `
<nav>
    <a href="/" data-link><h1>Hub de juegos</h1></a>
    <a href="#" onclick="${SwitchTheme()}">Cambiar</a>
    <a id="logouBtn" href="#">Logout</a>
</nav>
`;

export const listeners = () => {
  document.querySelector("header").innerHTML = template();
  const logouBtn = document.querySelector('#logouBtn')
  logouBtn.addEventListener('click', Logout)

  

};