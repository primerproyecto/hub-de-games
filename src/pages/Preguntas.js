export const template = () => {
  hacerCosas();
  return `

        <section class="preguntas">
            <h2>Preguntas 👋🏻 ddd</h2>
            <p id="pregunta"></p>
            <ul id="respuestas">
            </ul>
        
        </section>`;
};

const hacerCosas = () => {
  fetch("https://opentdb.com/api.php?amount=1&category=12&type=multiple")
    .then((response) => response.json())
    .then((data) => {
        const datos = data.results;
        console.log(datos)
        pintarHtml(datos)
    });
};

const pintarHtml = (data) => {
    data.forEach(element => {
        const {question, incorrect_answers, correct_answer} = element
        console.log(question);

        const arrayDeRespuestas = [...incorrect_answers, correct_answer]
        console.log(arrayDeRespuestas)
        document.querySelector('#pregunta').innerHTML = question
        arrayDeRespuestas.forEach( respuesta =>{    
            document.querySelector('#respuestas').innerHTML +=  titular(respuesta)
        })
       
    });
    
};


const titular = (texto) => `
<li>${texto}</li>
`