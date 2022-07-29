// funzione per invertire una parola
function invertiParola (parola) {
    return parola.split('').reverse().join('');
}

// funzione per capire se una parola è palindroma
function isPalindroma (parolaDaInvertire) {
    parolaDaInvertire = parolaDaInvertire.toLowerCase().trim();
    return parolaDaInvertire === invertiParola(parolaDaInvertire);
}

// funzione che restituisce un numero random compreso tra due estremi inclusi
function numeroRandom (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// funzione per eserguire una somma
function somma (numUno, numDue) {
    return numUno + numDue;
}

// funzione pari o dispari
function pariDispari (numeroUno, numeroDue) {
    const sommaNumeri = somma(numeroUno, numeroDue);
    let sommaPariDispari;
    if ( sommaNumeri % 2 === 0 ) {
        sommaPariDispari = 'pari';
    } else {
        sommaPariDispari = 'dispari';
    }
    console.log(`La somma ${numeroUno} + ${numeroDue} = ${numeroUno + numeroDue} è: ${sommaPariDispari}`);
    return sommaPariDispari;
}

// invocazione funzioni
const parola = prompt('Inserisci una parola');
if (isPalindroma(parola)) {
    console.log(`La parola '${parola}' è palindroma!`);
} else {
    console.log(`La parola '${parola}' non è palindroma!`);
}

const sceltaUtente = prompt('Scegli e quindi scrivi \'pari\' o \'dispari\'').toLocaleLowerCase().trim();
if ( sceltaUtente === 'pari' || sceltaUtente === 'dispari' ) {
    console.log(`L'utente ha scelto: ${sceltaUtente}`);
    const numeroUtente = parseInt(prompt('Scegli un numero da 1 a 5, estremi inclusi').trim());
    if ( !isNaN(numeroUtente) && numeroUtente >= 1 && numeroUtente <= 5 ) {
        console.log(`Il numero scelto dall'utente è: ${numeroUtente}`);
        const numeroComputerRandom = numeroRandom(1, 5);
        console.log(`Il numero del computer è: ${numeroComputerRandom}`);
        const sommaPariDispari = pariDispari(numeroUtente, numeroComputerRandom);
        if ( sommaPariDispari === sceltaUtente ) {
            console.log('Ha vinto l\'utente!');
        } else {
            console.log('Ha vinto il computer!');
        }
    } else {
        console.warn('Devi inserire un numero tra 1 e 5, estremi inclusi! Gioco termianto.');
    }
} else {
    console.warn('Devi scrive \'pari\' o \'dispari\'! Gioco terminato.');
}