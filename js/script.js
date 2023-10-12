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
    for(let i = 0; i < emailAddress.length; i++){
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

//DADI

const diceResults = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6'
];
const userNumber = document.getElementById('user-number');
const botNumber = document.getElementById('bot-number');
const dicebutton = document.getElementById('dice-button');
const message2 = document.getElementById('winLoseText');
function getRndInteger(min,max) {
    return Math.floor(Math.random() * (max- min + 1) ) + min;
}
dicebutton.addEventListener('click', function(){
    let random1 = diceResults[getRndInteger(0, diceResults.length - 1)];
    let random2 = diceResults[getRndInteger(0, diceResults.length - 1)];
    userNumber.innerHTML = random1;
    botNumber.innerHTML = random2;
    let text2
    if(random1 > random2){
        text2 = 'You Win!';
    }  else if(random2 > random1){
        text2 = 'CPU Win!';
    } else{
        text2 = 'Tie!';
    }

    message2.innerText = text2;
})