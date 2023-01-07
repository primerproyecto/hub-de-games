import "./whakamole.css";
import { randomTime } from "../utils/utils";
export const template = () => `
    <section class="wakatopo">
        <h2>Whaka topo <span
        class="wave"
        role="img"
        aria-label="Saludos"
      >
        👋
      </span> <span id="aciertos"></span><span id="cuentaAtras"></span></h2>
        <button id="btn-empezar">Empezar</button>
        <div id="wakatopo-wrapper" style="width:100%; height: auto;">
            <a class="agujero">
              <div class="mole">
                <div class="ojo-izquierdo"></div>
                <div class="ojo-derecho"></div>
              </div>
            </a>
            <a class="agujero">
            <div class="mole">
              <div class="ojo-izquierdo"></div>
              <div class="ojo-derecho"></div>
            </div>
          </a>
          <a class="agujero">
          <div class="mole">
            <div class="ojo-izquierdo"></div>
            <div class="ojo-derecho"></div>
          </div>
        </a>
        <a class="agujero">
        <div class="mole">
          <div class="ojo-izquierdo"></div>
          <div class="ojo-derecho"></div>
        </div>
      </a>
      <a class="agujero">
      <div class="mole">
        <div class="ojo-izquierdo"></div>
        <div class="ojo-derecho"></div>
      </div>
    </a>
    <a class="agujero">
    <div class="mole">
      <div class="ojo-izquierdo"></div>
      <div class="ojo-derecho"></div>
    </div>
  </a>
  <a class="agujero">
              <div class="mole">
                <div class="ojo-izquierdo"></div>
                <div class="ojo-derecho"></div>
              </div>
            </a>
            <a class="agujero">
            <div class="mole">
              <div class="ojo-izquierdo"></div>
              <div class="ojo-derecho"></div>
            </div>
          </a>
          <a class="agujero">
          <div class="mole">
            <div class="ojo-izquierdo"></div>
            <div class="ojo-derecho"></div>
          </div>
        </a>
        <a class="agujero">
        <div class="mole">
          <div class="ojo-izquierdo"></div>
          <div class="ojo-derecho"></div>
        </div>
      </a>
      <a class="agujero">
      <div class="mole">
        <div class="ojo-izquierdo"></div>
        <div class="ojo-derecho"></div>
      </div>
    </a>
    <a class="agujero">
    <div class="mole">
      <div class="ojo-izquierdo"></div>
      <div class="ojo-derecho"></div>
    </div>
  </a>
        </div>
    <div class="mensajeConResultado">
      <h1 id="mensaje"></h1>
      <button id="resetearJuego">Empezar</button>
      <button id="salirJuego">Salir</button>
    </div>
       
    </section>`;

const creacionDeJuego = () => {
  const agujeros = document.querySelectorAll(".agujero");
  const scoreBoard = document.querySelector("#aciertos");
  const moles = document.querySelectorAll(".mole");
  const btnEmpezarNodo = document.querySelector("#btn-empezar");
  const btnSalirNodo = document.querySelector("#salirJuego");
  const mensajeConResultadoNodo = document.querySelector(
    ".mensajeConResultado"
  );

  let lastHole;
  let timeUp = false;
  let score = 0;

  const randomHole = (agujeros) => {
    const idx = Math.floor(Math.random() * agujeros.length);
    const hole = agujeros[idx];
    if (hole === lastHole) {
      return randomHole(agujeros);
    }
    lastHole = hole;
    return hole;
  };

  const peep = () => {
    const time = randomTime(200, 1000);
    const hole = randomHole(agujeros);
    hole.classList.add("mostrar");
    setTimeout(() => {
      hole.classList.remove("mostrar");
      if (!timeUp) peep();
    }, time);
  };

  function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => {
      timeUp = true;
      mensajeConResultadoNodo.classList.add("mostrar");
    }, 10000);
  }

  function golpear(e) {
    if (!e.isTrusted) return;
    score++;
    this.parentNode.classList.remove("mostrar");
    scoreBoard.textContent = score;
  }

  moles.forEach((mole) => mole.addEventListener("click", golpear));

  btnEmpezarNodo.addEventListener("click", startGame);

  resetearJuego.addEventListener("click", function () {
    mensajeConResultadoNodo.classList.remove("mostrar");
    startGame();
  });

  btnSalirNodo.addEventListener("click", function () {
    mensajeConResultadoNodo.classList.remove("mostrar");
  });
};

export const listeners = () => {
  creacionDeJuego();
};
