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
    btn.addEventListener('click', function(){
    const email = document.getElementById ('email').value;
    const message = document.getElementById ('wrongTrueMessage');

    let correct = false;  
    console.log(email);
    for(let i = 0; i < emailAddress; i++){
        let writedemail = emailAddress[i];
        if(writedemail === email){
            correct = true;
        }
    }    
    let text;
    if(correct){
        text = 'Email Corretta!';
    }  else{
        text = 'Email Non Esistente!';
    }
    message.classList.remove('d-none');
    message.innerText = text;

});


console.log(emailAddress);