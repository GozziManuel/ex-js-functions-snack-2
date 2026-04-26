// snack 1
Crea una funzione che somma due numeri.
Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

function NumberSum(numero1, numero2) {
console.log(numero1 \* numero2);
}

NumberSum(3, 2);

const NumberSumAnonima = function (numero1, numero2) {
console.log(numero1 \* numero2);
};
NumberSumAnonima(3, 3);

const NumberSumArrow = (numero1, numero2) => console.log(numero1 \* numero2);

NumberSumArrow(12, 5);

---

// snack 2
Crea una arrow function che calcola il quadrato di un numero.
Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.

const quadrato = (numero) => console.log(numero \* numero);
quadrato(2);

---

// snack 3

Crea una funzione eseguiOperazione
Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

const somma = (a, b) => a + b;
const moltiplica = (a, b) => a \* b;

const eseguiOperazione = (a, b, operazione) => operazione(a, b);

console.log(eseguiOperazione(3, 4, somma));
console.log(eseguiOperazione(3, 4, moltiplica));

---

// snack 4
function creatimer() {
return function (text) {
setTimeout(() => console.log(text), 1000);
};
}
const handleText = creatimer();
handleText("Tempo Scaduto!");

---
