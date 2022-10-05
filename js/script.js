const nome = prompt('Inserisci il tuo nome: ');

const cognome = prompt('Inserisci il tuo cognome: ');

const colore = prompt('Inserisci il tuo colore preferito: ');

const eta = parseInt(prompt('Inserisci la tua eta: '));

let password = nome+cognome+colore+eta;

document.getElementById('password').innerHTML = `La tua password generata e':${password}`