// Crear un programa que determine si un número introducido en un Prompt es divisible
// por 5 o no, mostrar el resultado con console.log.
const num = parseInt(prompt("Ingresa un Numero:"));
if(num % 5 == 0){
    console.log(`El numero ${num} SI ES divisible por 5.`);
}else{
    console.log(`El numero ${num} NO ES divisible por 5.`);
}