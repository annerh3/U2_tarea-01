//  Crear un array vacío, luego generar 20 números al azar y guardarlos en un array.
const array = [];
let numeroRandom
for(let i=0;i<20;i++){
    numeroRandom = Math.floor(Math.random() * 100) + 1;
    array[i] = numeroRandom;
}
console.log(array);