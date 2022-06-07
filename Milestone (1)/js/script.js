// Consegna:
// Scrivi un programma che stampi i numeri da 1 a 100.

// MILESTONE 1
// -multipli di 3 stampa Fizz al posto del n.
// -multipli di 5 stampa Buzz. al posto del n.
// -multipli sia di 3 che di 5 stampa FizzBuzz.
// Stampare in console.

for(let i=0 ; i<=100; i++){

    if (i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz')
    }
    else if(i % 3 === 0){
        console.log('Fizz');
    }
    else if( i % 5 === 0) {
        console.log('Buzz');
    }
    else {
        console.log(i)
    }

}