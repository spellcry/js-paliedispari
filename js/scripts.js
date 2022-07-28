// funzione per capire se una parola è palindroma
function isPalindroma(parolaDaInvertire) {
    let parolaInvertita = parolaDaInvertire.split('').reverse().join('');
    return parolaInvertita === parolaDaInvertire;
}

// invocazione funzioni
const parola = prompt('Inserisci una parola');
console.log(isPalindroma(parola));