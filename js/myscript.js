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

function palindromeCheck()
{
    const word = document.getElementById("palindrome").value.toLowerCase();
    const charArray = word.split("");
    const reverseArray = [];
    let index = 0;
    if(!isNaN(word))
    {
        document.getElementById("palindrome-answer").classList.remove("d-none");
        document.getElementById("palindrome-answer").innerHTML = ` <h2 class="text-success"> Errore! Valore non valido! </h2>`;
    }
    else
    {
        for(let x = charArray.length - 1 ; x >= 0 ; x--)
        {
            reverseArray[index] = charArray [x];
            index++;
        }
    
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

function oddOrEven(){
    const userNumber = parseInt(document.getElementById("userNum").value);
    const userChoice = document.getElementById("pari-dispari").value;
    const pcNumber = Math.floor(Math.random() * 5) + 1;
    const sum = userNumber + pcNumber;
    let answer;

    if(sum % 2 == 0)
    {
        answer = "pari";
    }
    else
    {
        answer = "dispari";
    }

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