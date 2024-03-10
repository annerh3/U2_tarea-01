// Crear un programa que determine si un número introducido en un Prompt es par o no, 
// la respuesta será mostrada en la consola.
const num = parseInt(prompt("Ingresa un Numero:"));
if(num % 2 == 0){
    console.log(`El numero ${num} ES PAR.`);
}else{
    console.log(`El numero ${num} NO ES PAR (impar).`);
}