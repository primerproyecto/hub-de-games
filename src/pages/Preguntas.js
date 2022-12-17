import confetti from "canvas-confetti";

export const template = () => {
  cargarDatos();
  return `
        <section class="preguntas">
            <h2>Preguntas 👋🏻 en inglés. ${localStorage.getItem(
              "gameHubUser"
            )}</h2>
            <div id="preguntas-wrapper">
                <div class="preguntaCierre big">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div class="preguntaCierre big">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
                    <p id="pregunta"></p>
            <ul id="respuestas">
            </ul>
        </section>`;
};

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

    const arrayDeRespuestas = [...incorrect_answers, correct_answer].sort();

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
      if (correct_answer == e.target.dataset.respuesta) {
        confetti();
        document.querySelector("#respuestas").innerHTML = "";
        setTimeout(() => {
          cargarDatos();
        }, 3000);
      } else {
        console.log("es fallo");
      }
    };

    botonesRespuestas.forEach((boton) => {
      boton.addEventListener("click", comprobarRespuesta);
    });
  });
};

const titular = (texto) => `
<li><a data-respuesta="${texto}" tabindex="0">${texto}</a></li>
`;
