var conditionInt = true;
var conditionNome = true;
var conditionCognome = true;
var conditionColore = true;

while(conditionNome){
    var nome = prompt('Inserisci il tuo nome: ');
            if(!nome || !nome.match(/^[a-z]+$/i)){
                window.alert("Sono ammesse solo lettere!");
        }
        else {
            conditionNome = false;
        }
    }

while(conditionCognome){
    var cognome = prompt('Inserisci il tuo cognome: ');
                if(!cognome || !cognome.match(/^[a-z]+$/i)){
                window.alert("Sono ammesse solo lettere!");
        }
        else {
            conditionCognome = false;
        }
    }

while(conditionColore){
    var colore = prompt('Inserisci il tuo colore preferito: ');
    if(!colore || !colore.match(/^[a-z]+$/i)){
                window.alert("Sono ammesse solo lettere!");
        }
        else {
            conditionColore = false;
        }
    }

while(conditionInt){
    var eta = parseInt(prompt('Inserisci la tua eta: '));
        if(Number.isInteger(eta) == false){
            window.alert("Devi inserire solo numeri!");
        }
        else {
            conditionInt = false;
        }
    }

let password = nome+cognome+colore+eta;
document.getElementById('password').innerHTML = `La tua password generata e':${password}`