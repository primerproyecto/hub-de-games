import { data } from '../data/data';
import { Contador } from '../components/Contador';
import './tresEnRaya.scss'

export const template = () => `

<section class="tresenraya">
    <h2>Tres en raya <span
    class="wave"
    role="img"
    aria-label="Saludos"
  >
    👋
  </span> <span id="aciertos"></span></h2>
    <div id="tresEnRaya">
        <div class="cuadricula" data-cell></div>
        <div class="cuadricula" data-cell></div>
        <div class="cuadricula" data-cell></div>
        <div class="cuadricula" data-cell></div>
        <div class="cuadricula" data-cell></div>
        <div class="cuadricula" data-cell></div>
        <div class="cuadricula" data-cell></div>
        <div class="cuadricula" data-cell></div>
        <div class="cuadricula" data-cell></div>
    </div>
    <div class="mensajeConResultado">
      <h1 id="mensaje"></h1>
      <button id="btn-empezar">Empezar</button>
      <button id="salirJuego">Salir</button>
    </div>
    
   
</section>`;
let contador = 0;
const creacionDeJuego = () => {
    const circulo = 'circle'
    const cruz = 'cruz'
    const casillas = document.querySelectorAll('[data-cell]')
    const tresEnRaya = document.querySelector('#tresEnRaya')
    const botonResetear = document.querySelector('#btn-empezar')
    const botonSalir = document.querySelector('#salirJuego')
    const mensajeResultadoWrapper = document.querySelector('.mensajeConResultado')
    const mensaje = document.querySelector('#mensaje')

    
    

    const combinacionesGanadoras = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    // establezco los turnos. Por defecto empezamos con cruces
    let mueveCirculo

    const empiezaJuego = () => {
        casillas.forEach(casilla => {
            //CADA VEZ QUE EMPIEZA, QUITO TODAS LAS CLASES
            casilla.classList.remove(cruz)
            casilla.classList.remove(circulo)
            casilla.addEventListener('click', manerjarMovimiento, {once: true})
        })
        mensajeResultadoWrapper.classList.remove('mostrar')

    }
    const manerjarMovimiento = (e) => {
        
        const casilla = e.target;
        const claseSimbolo = mueveCirculo ? circulo : cruz
        
        agregarClase(casilla, claseSimbolo)

        // comprobar si alguien gana
        if(hayGanador(claseSimbolo)) {
            aciertos.innerHTML = Contador(++contador);
            terminarJuego(false)
        } else if ( hayEmpate()) {
            terminarJuego(true)
        }
        else {
            cambiarTurno()
        }
    }
    //AGREGAMOS LA CLASE CON EL SIMBOLO
    const agregarClase = (casilla, clase) => {
        casilla.classList.add(clase)
    }
    //CAMBIAMO DE TURNO
    const cambiarTurno = () => {
        mueveCirculo = !mueveCirculo
    }
    // COMPROBAR SI HAY GANADOR
    const hayGanador = (claseAComprobar) => {
        return combinacionesGanadoras.some(combinacion => {
            return combinacion.every(index => {
                return casillas[index].classList.contains(claseAComprobar)
            })
        })
    }
    // COMPROBAR SI HAY EMPATE
    const hayEmpate = () => {
        // comprobar que todas las celdas están marcados
        return [...casillas].every(casilla => {
            return casilla.classList.contains(circulo) || casilla.classList.contains(cruz)
        })
    }
    // TERMINAR JUEGO
    const terminarJuego = (resultado) => {
        // CUANDO RESULTADO ES TRUE, ES QUE HAY EMPATE
        if(resultado) {
            mensaje.innerHTML = 'Tablas!!!! No hay ganador, quereis volver a intentarlo'
            mensajeResultadoWrapper.classList.add('mostrar')
        }else {
            // CUANDO RESULTADO ES FALSE, ES QUE HAY UN GANADOR
            mensaje.innerHTML = `${mueveCirculo ? 'El jugador con las círculos ha ganado' : 'El jugador con las cruces ha ganado'} `
            mensajeResultadoWrapper.classList.add('mostrar')
        }
    }
    empiezaJuego()
    botonResetear.addEventListener('click', empiezaJuego)
    botonSalir.addEventListener('click', function(){
        mensajeResultadoWrapper.classList.remove('mostrar')
    })
}


export const listeners = () => {
    creacionDeJuego()
}