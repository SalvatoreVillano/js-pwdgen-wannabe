var conditionInt = true;
var conditionString = true;



while(conditionString){
    var nome = prompt('Inserisci il tuo nome: ');
            if(!nome || !nome.match(/^[a-z]+$/i)){
                window.alert("Sono ammesse solo lettere!");
        }
        else {
            conditionString = false;
        }
    }

const cognome = prompt('Inserisci il tuo cognome: ');

const colore = prompt('Inserisci il tuo colore preferito: ');

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