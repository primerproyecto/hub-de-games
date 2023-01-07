import {SwitchTheme} from './SwitchTheme'
import { Logout } from '../utils/utils';

const template = () => `

<nav>
    <a class="efectoEnlace" href="/" data-link><h1><i data-feather="home"></i><span>Hub de games</span></h1><span aria-hidden="true"><h1><i data-feather="home"></i><span>Hub de games</span></h1></span></a>
    <a class="efectoEnlace" href="#" onclick="${SwitchTheme()}"><span><i data-feather="refresh-ccw"></i>Refrescar color</span><span aria-hidden="true"><i data-feather="refresh-ccw"></i>Refrescar color</span></a><a class="efectoEnlace" href="/" id="logouBtn"><span><i data-feather="log-out"></i>Logout</span><span aria-hidden="true"><i data-feather="log-out"></i>Logout</span></a>
</nav>
`;

export const listeners = () => {
  document.querySelector("header").innerHTML = template();
  const logouBtn = document.querySelector('#logouBtn')
  logouBtn.addEventListener('click', Logout)
  feather.replace()

  

};