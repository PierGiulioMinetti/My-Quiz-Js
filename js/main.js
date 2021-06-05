// create a reference of form

const form = document.querySelector(".form");

const risposteEsatte = ["B", "B", "A", "A"];

const containerScore = document.querySelector(".container-score");

let risposte = [];


const score = document.querySelector(".score");

form.addEventListener("submit", e => {
    // definiamo una variabile con punteggio pari a zero
    let punteggio = 0;
    // impediamo alla pagina di ricaricare all'invio del submit
    e.preventDefault();

    // console.log(form.q1.value);

    // assegnamo le risposte andando a prendere i valori (prenderà quelli con checked)
    risposte = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    // console.log(risposte);

    // iteriamo comparando singola risposta all'indice delle risposte esatte, se corrispondono aumenteremo i punti
    risposte.forEach((risposta, indice) => {
        if (risposta === risposteEsatte[indice]) {

            punteggio += 25;

        } else {
            punteggio = punteggio;
        }
    });
    console.log(punteggio);

    // evento window, faremo scrollare a posizione x 0 y 0
    scrollTo(0, 0);



    // animare il risultato finale
    // creiamo un contatore
    let output = 0;

    // con setInterval creeremo un punteggio che si riaggirna ogni tot millisecondi, 30 nel nostro caso
    const timer = setInterval(() => {
        containerScore.style.display = ("flex");
        score.innerText = `${output}`;

        if (output === punteggio) {
            clearInterval(timer);
        } else {
            output++;
        }

    }, 30);


});
