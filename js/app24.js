// Crear un array vacío, luego generar N números al azar y guardarlos en un array, N es
// introducido por el usuario a través de un prompt.
const array =  [];
let n = parseInt(prompt("Ingrese la cantidad de numeros que desea generar: (resultado en consola)"));

for(let i=0;i<n;i++){
    array[i] = Math.floor(Math.random() * 100) + 1;
}
console.log(array);