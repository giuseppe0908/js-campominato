//computer deve generare 16 numeri casuali compresi tra 1 a 100
var arraybomb= [];
var max = 100;
creaBomba(arraybomb, max);
console.log(arraybomb);
random(1, max);

function creaBomba(array, max){
  // while(array.length < 16) {
  // var numeri = random(1, max);     CREDO SIA QUI IL PROBLEA
  //  if (!array.includes(numeri)) {
  //   array.push();
  //  }
  // }
return array;
}

//funzione  genera numeri casuali

function random(min , max){
  if (isNaN(min) || (max)) {
    console.log("Non sono numeri");
  }else {
    return Math.floor(Math.random()*(max-min +1)+1);
  }
}
