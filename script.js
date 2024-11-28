// script.js
document.getElementById("calcola").addEventListener("click", function() {
    // Leggi i valori inseriti dall'utente
    const valore1 = parseFloat(document.getElementById("valore1").value);
    const valore2 = parseFloat(document.getElementById("valore2").value);
    const risultatoDiv = document.getElementById("risultato");
    const messaggioDiv = document.getElementById("messaggio");
    const lista = document.getElementById("lista");
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    // Verifica che i valori siano validi
    if (isNaN(valore1) || isNaN(valore2)) {
        risultatoDiv.textContent = "Please, insert valid values.";
        return;
    }

    // Logica per calcolare il risultato
    let risultato = Math.ceil((valore1/2500 + valore2/500)*10);
    //if (valore1 > valore2) {
    //    risultato = "Il Valore 1 è maggiore del Valore 2!";
    //} else if (valore1 < valore2) {
    //    risultato = "Il Valore 2 è maggiore del Valore 1!";
    //} else {
      //  risultato = "I due valori sono uguali!";
    //}

    // Mostra il risultato
    risultatoDiv.textContent = `Your requiriment points are ${risultato}, you can join the following clubs:`

const valori = [" "];
if (risultato > 409) {
    valori.push("Eclipse");
}
if (risultato > 399) {
    valori.push("Sandy's City");
}
if (risultato > 369) {
    valori.push("Tensura")
}
if (risultato > 319) {
    valori.push("Pearls")
}
if (risultato > 299) {
    valori.push("Shinigami")
}
if (risultato > 299) {
    valori.push("Unchained")
}
if (risultato > 209) {
    valori.push("Mariachi")
}
if (risultato > 209) {
    valori.push("Gala")
}
if (risultato > 209) {
    valori.push("Rice Farm")
}
if (risultato > 173) {
    valori.push("Elite Few")
}
if (risultato > 169) {
    valori.push("Ladyless")
}
if (risultato < 170) {
    valori.push("I'm sorry, we don't have a club for you :(")
}


// Seleziona l'elemento <ul> dal DOM


// Cicla attraverso l'array di valori
valori.forEach(valore => {
    const li = document.createElement("li"); // Crea un nuovo elemento <li>
    li.textContent = valore; // Imposta il testo dell'elemento <li>
    lista.appendChild(li); // Aggiungi <li> al <ul>
});
lista = [];
    // Mostra il messaggio
    messaggioDiv.textContent = messaggio;

    
});
