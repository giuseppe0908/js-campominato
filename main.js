//computer deve generare 16 numeri casuali compresi tra 1 a 100
var arraybomb= [];
var max = parseInt(100);
creaBomba(arraybomb, max);


random(1, max);


function creaBomba(array, max){
  while(array.length < 16) {
  var numeri = random(1, max);
console.log(numeri);
   if (!array.includes(numeri)) {
       console.log("ciao");
       array.push(numeri+ "sono array");

       console.log(!array.includes(numeri));
    // break;

   }
  }
return array;
}
// for (var i = 1; i < arraybomb.length; i++) {
//    console.log(arraybomb[i]);
//   var numeri = random(1,100);
//   if (!arraybomb.includes(numeri)) {
//      arraybomb.push();
//
//   }
// }

//funzione  genera numeri casuali

function random(min , max){
  if (isNaN(min) || isNaN(max)) {
    console.log("Non sono numeri");
  }else {
    return Math.floor(Math.random()*(max-min +1)+1);
  }
}
