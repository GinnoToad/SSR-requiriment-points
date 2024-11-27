// script.js
document.getElementById("calcola").addEventListener("click", function() {
    // Leggi i valori inseriti dall'utente
    const valore1 = parseFloat(document.getElementById("valore1").value);
    const valore2 = parseFloat(document.getElementById("valore2").value);
    const risultatoDiv = document.getElementById("risultato");
    const messaggioDiv = document.getElementById("messaggio");

    // Verifica che i valori siano validi
    if (isNaN(valore1) || isNaN(valore2)) {
        risultatoDiv.textContent = "Please, insert valid values.";
        return;
    }

    // Logica per calcolare il risultato
    let risultato = Math.ceil(valore1/2500 + valore2/500)*10;
    //if (valore1 > valore2) {
    //    risultato = "Il Valore 1 è maggiore del Valore 2!";
    //} else if (valore1 < valore2) {
    //    risultato = "Il Valore 2 è maggiore del Valore 1!";
    //} else {
      //  risultato = "I due valori sono uguali!";
    //}

    // Mostra il risultato
    risultatoDiv.textContent = `Your requiriment points are: ${risultato}, you can join the following clubs:`
    let messaggio;
    if (risultato > 400 ) {
        messaggio = "You can join Sandy's City" ;
    } else if (false) {
        messaggio = "La somma è nella media, ottimo lavoro!";
    } else {
        messaggio = "No club for you, noob!";
    }

    // Mostra il messaggio
    messaggioDiv.textContent = messaggio;

    
});
