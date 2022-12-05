import {data} from '../data/data'
export const template = () => `
<section class="home">
    <h2>${data.juegos.length} juegos online</h2>
    <div id="formHomeContent">
      <label for="inputLogin">¿ Como te llamas ?</label>
      <input id="inputLogin" type="text" />
      <button id="buttonLogin">Enviar</button>
    </div>
</section>
`;

export const homelisteners = () => {

    const mainTag = document.querySelector("main");
    mainTag.innerHTML = template();
    const inputLogin = document.querySelector('#inputLogin')
    const botonLogin = document.querySelector('#buttonLogin')

    if(localStorage.getItem('gameHubUser')){
      mainTag.innerHTML = `<h2>Bienvenido ${localStorage.getItem('gameHubUser')}</h2><section id="juegos"></section>`;
      data.juegos.forEach(juego => {
        mainTag.querySelector('#juegos').innerHTML += pintaJuego(juego);
      });
    }else {
      const login = () => {
        if(inputLogin.value.length > 0){
          localStorage.setItem('gameHubUser', `${inputLogin.value}`)
        }
      }
      botonLogin.addEventListener('click', login)
    }
};


const pintaJuego = (juego) => `
  <a href="${juego.link}">
  <figure class="juego">
  ${juego.plantilla}
    <figcaption>${juego.title}</figcaption>
  </figure>
  </a>
`