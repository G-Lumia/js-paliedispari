// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindromaPari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


const pButton = document.getElementById("sendWord");

pButton.addEventListener("click" , palindromeCheck);

// Tramite l'uso di questa funzione avremo modo di capire se la parola inseirita dall'utente è un palindromo o meno

function palindromeCheck()
{
    // variabile che contiente il testo inserito dall'utente
    const word = document.getElementById("palindrome").value.toLowerCase();
    // array di caratteri che conterrà le lettere di word
    const charArray = word.split("");
    // inizializzazione di un vettore che conterrà le lettere di word, in ordine inverso
    const reverseArray = [];
    let index = 0;
    // controllo per verificare la validità dell'input
    if(!isNaN(word))
    {
        document.getElementById("palindrome-answer").classList.remove("d-none");
        document.getElementById("palindrome-answer").innerHTML = ` <h2 class="text-success"> Errore! Valore non valido! </h2>`;
    }
    else
    {
        // ciclo iterativo che scorrerà al contrario il vettore charArray, usato per creare il vettore reverseArray
        for(let x = charArray.length - 1 ; x >= 0 ; x--)
        {
            reverseArray[index] = charArray [x];
            index++;
        }
    
        // controllo per verificare se la parola inserita dall'utente è uguale alla parola stessa scritta in ordine invertito
        if(word === reverseArray.join(""))
        {
            document.getElementById("palindrome-answer").classList.remove("d-none");
            document.getElementById("palindrome-answer").innerHTML = ` <h2 class="text-success"> La parola inserita è un palindromo! </h2> 
                                                                        <h3> Parola inserita : ${word} </h3>
                                                                        <h3> Parola invertita : ${reverseArray.join("")} </h3>` ;
        }
        else
        {
            document.getElementById("palindrome-answer").classList.remove("d-none");
            document.getElementById("palindrome-answer").innerHTML = ` <h2 class="text-danger"> La parola inserita non è un palindromo! </h2> 
                                                                        <h3> Parola inserita : ${word} </h3>
                                                                        <h3> Parola invertita : ${reverseArray.join("")} </h3>` ;
        }
    }
}


const gButton = document.getElementById("startGame");

gButton.addEventListener("click" , oddOrEven);

// Tramite l'uso di questa funzione giocheremo a "pari e dispari" contro il computer

function oddOrEven(){

    // variabile che conterrà il valore scelto dall'utente
    const userNumber = parseInt(document.getElementById("userNum").value);
    // variabile che conterrà "pari" o "dispari", scelto dall'utente
    const userChoice = document.getElementById("pari-dispari").value;
    // variabile che conterrà il valore scelto a caso dal computer
    const pcNumber = Math.floor(Math.random() * 5) + 1;

    //i due numeri vengono sommati per dei futuri controlli
    const sum = userNumber + pcNumber;

    //variabile che conterrà l'esito della partita
    let answer;

    // controllo per verificare se la somma dei due numeri è pari o dispari
    if(sum % 2 == 0)
    {
        answer = "pari";
    }
    else
    {
        answer = "dispari";
    }

    // controllo per verificare se l'utente ha indovinato l'esito del gioco o meno
    if(userChoice === answer)
    {
        document.getElementById("gameResult").classList.remove("d-none");
        document.getElementById("gameResult").innerHTML = ` <h2 class="text-success"> ${sum} è ${answer}! Hai vinto! </h2> 
                                                                   <h3> Numero scelto : ${userNumber} </h3>
                                                                   <h3> Numero scelto dal computer : ${pcNumber} </h3>` ;
    }
    else
    {
        document.getElementById("gameResult").classList.remove("d-none");
        document.getElementById("gameResult").innerHTML = ` <h2 class="text-danger"> ${sum} è ${answer}! Hai perso! </h2> 
                                                                   <h3> Numero scelto : ${userNumber} </h3>
                                                                   <h3> Numero scelto dal computer : ${pcNumber} </h3>` ;
    }
        
}