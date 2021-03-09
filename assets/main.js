

//computer deve generare 16 numeri casuali compresi tra 1 a 100
var arraybomb= [];
var arrayUtente = [];
var max = 0;


var difficolta = parseInt(prompt("Benvenuto! Questo è il gioco campo minato inserisci la difficolta: Facile : 0 ; Medio : 1 ; Difficile: 2"));
 switch (difficolta) {

    case 0:
    max = 100;
    break;

    case 1:
    max = 80;
    break;

    case 2:
    max = 50;
    default:

 }
 creaBomba(arraybomb, max);
 random(1, max);
 if (difficolta==0) {
   console.log("Hai scelto modalità FACILE vediamo cosa sai fare");
 }else if (difficolta==1) {
   console.log("Hai scelto modalità MEDIA vediamo cosa sai fare");
 }else {
   console.log("hai scelto modalità DIFFICILE vediamo cosa sai fare");
 }


console.log(arraybomb);
var punteggio = numberUtente(arrayUtente, max, arraybomb);
console.log("GAME OVER! il tuo punteggio è:" +" "+ punteggio+ " "+ "pensavo facessi meglio");


//funzione
function creaBomba(array, max){
  while(array.length < 16) {
  var numeri = random(1, max);

   if (!(array.includes(numeri))) {
       array.push(numeri);
       array.sort();
       // console.log(array + "sono array");
   }
  }

return array;
}

//funzione utente
//verifico se il numero inserito dall'utente sia un numero, sia compreso tra 1 e 100-16 e che non ripeti il numero

function numberUtente(arrayU, maxx, arrayB){
  while (arrayU.length < max - 16 ) {
    var numutente= parseInt(prompt("Insersci un numero e spera di non colpire la bomba"));
    if (isNaN(numutente) && (numutente > 0) && (numutente <= 100) && (!arrayU.includes(numutente)) || (!arrayB.includes(numutente))){
        arrayU.push(numutente);
        console.log(arrayU);
      }else {
       return arrayU.length;
      }
    }

    return arrayU.length;
}




//funzione  genera numeri casuali

function random(min , max){
  if (isNaN(min) || isNaN(max)) {
    console.log("Non sono numeri");
  }else {
    return Math.floor(Math.random()*(max-min +1)+1);
  }
}
