import confetti from "canvas-confetti";
import "./ahorcado.css";
export const template = () => `

<section class="ahorcado">
    <h2>Ahorcado
        <span class="wave" role="img" aria-label="Saludos">👋</span>
    </h2>
    
    
    <div class="ahorcadoWrapper">
        <div id="ahorcado-wrapper">
        <div id="ahorcado__base"></div>
        <div id="ahorcado__mastil"></div>
        <div id="ahorcado__cruz"></div>
        <div id="ahorcado__soga"></div>
        <div id="ahorcado__cabeza"></div>
        <div id="ahorcado__tronco"></div>
        <div id="ahorcado__brazoIzq"></div>
        <div id="ahorcado__brazoDer"></div>
        <div id="ahorcado__piernaIzq"></div>
        <div id="ahorcado__piernaDer"></div>
    </div>
        <div id="controls">
        <p id="intentos"></p>
            <p id="historial"></p>
            <div id="resultado"></div>
            <div class="ahoracadoFormFields">
                <input id="letra" type="text" placeholder="Dame una letra" maxlength="1"> 
                <button id="boton">Comprobar</button>
            </div>
            
        </div>
    </div>
    <div class="mensajeConResultado">
      <h1 id="mensaje"></h1>
      <button id="btn-empezar">Empezar</button>
      <button id="salirJuego">Salir</button>
    </div>
</section>`;

const ahorcadoListeners = () => {
  const listaPalabras = [
    "extrañezas",
    "cabizbajas",
    "mezcolanza",
    "prejuzgaba",
    "barviturico",
    "humanizaba",
    "civilizado",
    "humanizado",
  ];
  let palabraAdivinar = [];
  let palabraMostrar = [];
  let historialLetrasUsuario = [];
  let numIntentos = 10;
  let nodoLetra = document.querySelector("#letra");
  let nodoBoton = document.querySelector("#boton");
  let nodoResultado = document.querySelector("#resultado");
  let nodoIntentos = document.querySelector("#intentos");
  let nodoHistorial = document.querySelector("#historial");

  const ahorcado = document.querySelector("#ahorcado-wrapper");

  const btnEmpezarNodo = document.querySelector("#btn-empezar");
  const btnSalirNodo = document.querySelector("#salirJuego");
  const mensajeConResultadoNodo = document.querySelector(".mensajeConResultado");
  const h1Nodo = document.querySelector("#mensaje");

  //======================================================================
  // FUNCIONES
  //======================================================================

  /**
   * Método que prepara el juego para iniciarse
   */
  function prepararJuego() {
    //// 1 Selecciono una palabra aleatoria de listaPalabra
    //// 1.1 Obtengo la posicion aleatoria
    let posAleatoriaListaPalabras = Math.floor(
      Math.random() * listaPalabras.length
    );
    //// 1.2 Obtengo la palabra aleatoria
    let palabraAleatoria = listaPalabras[posAleatoriaListaPalabras];
    //// 1.3 Separo la palabra en letras y lo guardo
    palabraAdivinar = palabraAleatoria.split("");
    //// 2 Preparo el array que va a ver el usuario. Tendrá el mismo número de guiones que letras en palabraAdivinar
    for (let letra of palabraAdivinar) {
      palabraMostrar.push("_");
    }
    //// 3 Dibuja todo lo necesario
    dibujarJuego();
  }

  /**
   * Método que redibuja lo que ve el usuario con los cambios
   */
  function dibujarJuego() {
    // Convertimos un array en un texto, separado por espacios, y lo mostramos en el div resultado
    nodoResultado.textContent = palabraMostrar.join(" ");
    // Mostramos los intentos
    nodoIntentos.textContent =
      numIntentos > 1
        ? `Te quedan ${numIntentos} intentos`
        : `Te queda ${numIntentos} intento`;

    // Mostramos el historial de letras
    nodoHistorial.textContent = historialLetrasUsuario.join(" ");
  }

  /**
   * Método que comprueba la letra que ha introducido el usuario
   */
  function comprobarLetraUsuario() {
    //comprobamos que sea una letra
    if (!isDigit(nodoLetra.value)) {
      //// 1 Sustituye los guiones por la letra acertada
      // Guardo la letra del input que ha escrito el usuario en una variable
      let letraUsuario = nodoLetra.value;
      // Vaciamos el input para que el usuario pueda volver a escribir
      nodoLetra.value = "";
      // Le devolvemos el foco al input para que pueda introducir otra letra
      nodoLetra.focus();
      // Recorremos todas las letras para saber si alguna esta bien
      for (const [posicion, letraAdivinar] of palabraAdivinar.entries()) {
        // Comprobamos si la letra del usuario es igual a la letra a adivinar
        if (letraUsuario == letraAdivinar) {
          // Sustituimos el guion por la letra acertada
          palabraMostrar[posicion] = letraAdivinar;
        }
      }
      //// 2 Comprobamos si se ha equivocado
      // ¿No esta la letra?
      if (!palabraAdivinar.includes(letraUsuario)) {
        // Restamos un intento
        numIntentos -= 1;
        if (numIntentos == 9) {
          ahorcado.querySelector("div:nth-child(1)").style.backgroundColor =
            "hsl(var(--hue), var(--saturation), 20%)";
        }
        if (numIntentos == 8) {
          ahorcado.querySelector("div:nth-child(2)").style.backgroundColor =
            "hsl(var(--hue), var(--saturation), 20%)";
        }
        if (numIntentos == 7) {
          ahorcado.querySelector("div:nth-child(3)").style.backgroundColor =
            "hsl(var(--hue), var(--saturation), 20%)";
        }
        if (numIntentos == 6) {
          ahorcado.querySelector("div:nth-child(4)").style.backgroundColor =
            "hsl(var(--hue), var(--saturation), 20%)";
        }
        if (numIntentos == 5) {
          ahorcado.querySelector("div:nth-child(5)").style.backgroundColor =
            "hsl(var(--hue), var(--saturation), 20%)";
        }
        if (numIntentos == 4) {
          ahorcado.querySelector("div:nth-child(6)").style.backgroundColor =
            "hsl(var(--hue), var(--saturation), 20%)";
        }
        if (numIntentos == 3) {
          ahorcado.querySelector("div:nth-child(7)").style.backgroundColor =
            "hsl(var(--hue), var(--saturation), 20%)";
        }
        if (numIntentos == 2) {
          ahorcado.querySelector("div:nth-child(8)").style.backgroundColor =
            "hsl(var(--hue), var(--saturation), 20%)";
        }
        if (numIntentos == 1) {
          ahorcado.querySelector("div:nth-child(9)").style.backgroundColor =
            "hsl(var(--hue), var(--saturation), 20%)";
        }
        if (numIntentos == 0) {
          ahorcado.querySelector("div:nth-child(10)").style.backgroundColor =
            "hsl(var(--hue), var(--saturation), 20%)";
          mensajeConResultadoNodo.classList.add("mostrar");
        }
        /* if(numIntentos == 0) {
                ahorcado.querySelector('div:nth-child(9)').style.display = 'block'
                
            } */

        // Guardamos en el historial la letra pulsada por el usuario
        historialLetrasUsuario.push(letraUsuario);
      }
      //// 3 Comprobamos si hay que terminar el juego
      acabarJuego();
      //// 4 Mostramos los cambios
      dibujarJuego();
    }
    //si no es una letra, es un número
    else {
      nodoLetra.value = "";
      alert("Solo puedes meter letras");
    }
  }

  /**
   * Método que comprueba si se ha pulsado la tecla Enter
   */
  function comprobarPulsadoEnter(evento) {
    if (evento.code == "Enter") {
      comprobarLetraUsuario();
    }
  }

  /**
   * Método que verifica si se ha acabado el juego
   */
  function acabarJuego() {
    // Ha ganado: ¿Le queda guiones al jugador?
    if (!palabraMostrar.includes("_")) {
      // alert('Has ganado!!!');
      mensajeConResultadoNodo.classList.add("mostrar");
      // Refrescamos la página para volver a jugar
      location.reload(true);
    }
    // Ha perdido: ¿Tiene 0 intentos?
    if (numIntentos == 0) {
      ahorcado.querySelector("div:nth-child(9)").style.display = "block";
      h1Nodo.innerHTML = "Has Perdido!!! Era: " + palabraAdivinar.join("");
      mensajeConResultadoNodo.classList.add("mostrar");
      //alert('Has Perdido!!! Era: ' + palabraAdivinar.join(''));
      // Refrescamos la página para volver a jugar
      // ;
    }
  }

  btnEmpezarNodo.addEventListener("click", function () {
    location.reload(true);
  });
  btnSalirNodo.addEventListener("click", function () {
    mensajeConResultadoNodo.classList.remove("mostrar");
  });

  /* comprobar que el dígito no es un número*/
  var isDigit = (function () {
    var re = /^\d$/;
    return function (c) {
      return re.test(c);
    };
  })();

  //======================================================================
  // EVENTOS
  //======================================================================
  // Al hacer clic en el boton se llama la funcion comprobarLetraUsuario
  nodoBoton.addEventListener("click", comprobarLetraUsuario);
  // Al hacer Enter con el teclado se llama a la funcion comprobarLetraUsuario
  nodoLetra.addEventListener("keyup", comprobarPulsadoEnter);

  prepararJuego();
};

//palabraAdivinarDiv.innerHTML = 'acepciones'

export const listeners = () => {
  ahorcadoListeners();
};
