// MILESTONE 3
// Per ogni numero, dato un container nel DOM,
// appendi un elemento html con il numero
// o la stringa corretta.
// Applica uno stile differente a seconda del valore
// dell'indice per i multipli di 3
// per i multipli di 5
// per i valori che sono sia multipli di 3 che di 5
// (seguendo le regole della Milestone 1).

const container = document.querySelector('.container');

for( let i =1; i<=100; i++){
    let numberType;
    let numberOrText;
    if(i %3 ===0 && i % 5===0){
        numberType = 'buzzfizz';
        numberOrText = 'buzzfizz'
    }
    else if(i % 3 ===0){
        numberType = 'fizz';
        numberOrText = 'fizz'

    }
    else if(i % 5===0){
        numberType = 'buzz'
        numberOrText = 'buzz'

    }
    const colorBox = `<div class="box ${numberType}">${numberOrText|| i }</div>`;
    container.innerHTML+= colorBox;
}