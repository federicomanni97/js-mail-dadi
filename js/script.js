//MAIL
//Chiedi all’utente la sua email,
//controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull’esito del controllo.

//GIOCO DEI DADI
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

const emailAddress = [
    'mariorossi@boolean.com', 
    'lucaposillipo@boolean.com',
    'alessandrosiani@boolean.com',
    'paoloverdi@boolean.com',
    'francescoruffa@boolean.com'
];

const btn = document.querySelector ('button');
const email = document.getElementById ('email').value;

btn.addEventListener('click', function(){
    let useremail = document.getElementById ('email').value;
    console.log(useremail);
})


console.log(emailAddress);