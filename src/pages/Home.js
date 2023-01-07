import {data} from '../data/data'
import { Login } from '../utils/utils';

const appnode = document.querySelector('main#app')
export const template = () => `

  <section class="home">
      
      <div id="formHomeContent">
        <h2>${data.juegos.length} juegos online</h2>
        <input id="inputLogin" type="text" placeholder="Cómo te llamas ?" />
        <button id="buttonLogin">Enviar</button>
      </div>
  </section>
`;


export const homelisteners = () => {

    const mainTag = document.querySelector("main");
    mainTag.innerHTML = template();
    const inputLogin = document.querySelector('#inputLogin')
    const botonLogin = document.querySelector('#buttonLogin')
    inputLogin.focus()

    if(localStorage.getItem('gameHubUser')){
      mainTag.innerHTML = `<section><h2>Bienvenido ${localStorage.getItem('gameHubUser')} <span
      class="wave"
      role="img"
      aria-label="Saludos"
    >
      👋
    </span></h2><section id="juegos"></section></section>`;
      data.juegos.forEach(juego => {
        mainTag.querySelector('#juegos').innerHTML += pintaJuego(juego);
      });
    } else {
      
      //document.querySelector('.pokemon-cargando-wrapper').style.display = 'none'
      
      botonLogin.addEventListener('click', Login)
    }
};


const pintaJuego = (juego) => `
  <a class="enlaceJuego" href="${juego.link}">
    <figure class="juego">
      ${juego.plantilla}
      <figcaption>${juego.title}</figcaption>
    </figure>
  </a>
`