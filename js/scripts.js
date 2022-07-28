// funzione per capire se una parola è palindroma
function isPalindroma(parolaDaInvertire) {
    let parolaInvertita = parolaDaInvertire.split('').reverse().join('');
    return parolaInvertita === parolaDaInvertire;
}

// funzione che restituisce un numero random compreso tra due estremi inclusi
function numeroRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// funzione pari o dispari
function pariDispari (numUtente, numComputer) {
    if ( isNaN(numUtente) || numUtente < 1 || numUtente > 5 ) {
        console.warn(`Il valore 'numUtente' passato alla funzione deve essere un numero tra 1 e 5, estremi inclusi`);
        return null;
    }
    if ( isNaN(numComputer) || numComputer < 1 || numComputer > 5 ) {
        console.warn(`Il valore 'numComputer' passato alla funzione deve essere un numero tra 1 e 5, estremi inclusi`);
        return null;
    }     
    const sommaNumeri = numUtente + numComputer;
    let pariDispari;
    if ( sommaNumeri % 2 === 0 ) {        
        pariDispari = 'pari';
    } else {
        pariDispari = 'dispari';
    }
    console.log(`La somma ${numUtente} + ${numComputer} = ${numUtente + numComputer} è: ${pariDispari}`);
    return pariDispari;
}

// invocazione funzioni
const parola = prompt('Inserisci una parola');
if (isPalindroma(parola)) {
    console.log(`La parola '${parola}' è palindroma!`);
} else {
    console.log(`La parola '${parola}' non è palindroma!`);
}

const sceltaUtente = prompt('Scegli e quindi scrivi \'pari\' o \'dispari\'');
if ( sceltaUtente === 'pari' || sceltaUtente === 'dispari' ) {
    console.log(`L'utente ha scelto: ${sceltaUtente}`);
    const numeroUtente = parseInt(prompt('Scegli un numero da 1 a 5, estremi inclusi'));
    console.log(`Il numero scelto dall'utente è: ${numeroUtente}`);
    const numeroComputerRandom = numeroRandom(1, 5);
    console.log(`Il numero del computer è: ${numeroComputerRandom}`);
    const sommaPariDispari = pariDispari(numeroUtente, numeroComputerRandom);
    if( sommaPariDispari != null ) {
        if ( sommaPariDispari === sceltaUtente ) {
            console.log('Ha vinto l\'utente!');
        } else {
            console.log('Ha vinto il computer!');
        }
    } else {
        console.warn('Gioco terminato.')
    }
} else {
    console.warn('Devi scrive \'pari\' o \'dispari\'! Gioco terminato.');
}