// MILESTONE 2
// Per ogni numero, data una ul nel DOM, 
// aggiungete un elemento html li con il numero o la stringa
//  corretta (seguendo le regole della Milestone 1).



const elementList = document.querySelector('.list');

for(let i = 0; i<=100; i++){
    const fillList = `<li> ${i} </li>`;

    if (i % 3 === 0 && i % 5 === 0){
        elementList.innerHTML += `<li>FizzBuzz </li>`;

    }
    else if(i % 3 === 0){
        elementList.innerHTML += `<li>Fizz</li>`;

    }
    else if( i % 5 === 0) {
        elementList.innerHTML += `<li>Buzz </li>`;

    }
    else {
        elementList.innerHTML+= fillList
    }

   

}