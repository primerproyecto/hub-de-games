
import { Contador } from "../components/Contador";

export const template = () => {
  cargarDatos();
  return `
        <section class="preguntas">
            <h2>Hola <span
            class="wave"
            role="img"
            aria-label="Saludos"
          >
            👋
          </span>  <span class="name">${localStorage.getItem("gameHubUser")}</span> Preguntas  en inglés.  <span id="aciertos"></span></h2>
            
            <p id="pregunta"></p>
            <ul id="respuestas">
            </ul>
            <div class="mensajeConResultado">
            <h1 id="mensaje"></h1>
            <button id="resetearJuego">Siguiente</button>
            <button id="salirJuego">Terminar</button>
          </div>
        </section>
        <div class="preguntasCargando cargando">
        <div id="preguntas-wrapper"><div class="preguntaCierre big"><div></div><div></div><div></div></div><div class="preguntaCierre big"><div></div><div></div><div></div></div></div>
        </div>
        
        `;
};
let contador = 0;

const cargarDatos = () => {
  try {
    fetch("https://opentdb.com/api.php?amount=1&category=12&type=multiple")
      .then((response) => response.json())
      .then((data) => {
        const datos = data.results;
        pintarHtml(datos);
      });
  } catch (error) {
    console.error(error);
  }
};

const pintarHtml = (data) => {
  data.forEach((element) => {
    const { question, incorrect_answers, correct_answer } = element;
    const mensajeNodo = document.querySelector(".mensajeConResultado");
    const resetearJuegoNodo = document.querySelector("#resetearJuego");
    const salirJuegoNodo = document.querySelector("#salirJuego");
    const h1Nodo = document.querySelector('#mensaje')
    const cargandoNodo = document.querySelector('.preguntasCargando')
    
    cargandoNodo.classList.remove('cargando')
    const arrayDeRespuestas = [...incorrect_answers, correct_answer].sort();
    mensajeNodo.classList.remove('mostrar')
    //RELLENAMOS PREGUNTA

    document.querySelector("#pregunta").innerHTML = question;

    // RELLENAMOS RESPUESTAS
    arrayDeRespuestas.forEach((respuesta) => {
      document.querySelector("#respuestas").innerHTML += titular(respuesta);
    });
    //AGREGAR EVENTO

    const botonesRespuestas = Array.from(
      document.querySelectorAll("a[data-respuesta]")
    );

    const comprobarRespuesta = (e) => {
      e.preventDefault()
      if (correct_answer == e.target.dataset.respuesta) {
        aciertos.innerHTML = Contador(++contador);
        mensajeNodo.classList.add("mostrar");
        h1Nodo.innerHTML = 'Enhorabuena, la respuesta correcta es ' + correct_answer

        
        document.querySelector("#respuestas").innerHTML = "";
      } else {
        //SI ES FALSO
      }
    };

    botonesRespuestas.forEach((boton) => {
      boton.addEventListener("click", comprobarRespuesta);
    });

    resetearJuegoNodo.addEventListener("click", cargarDatos);
    salirJuegoNodo.addEventListener("click", function(){
    mensajeNodo.classList.remove('mostrar')
    });
    feather.replace()
  });
};

const titular = (texto) => `
<li><a class="respuestas" href="#" data-respuesta="${texto}" tabindex="0"><i data-feather="arrow-right"></i>${texto}</a></li>
`;
