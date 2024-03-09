// Escriba un programa que pida 3 números y escriba en la consola el mayor de los tres.
const num1 = parseInt(prompt("Ingresa el Primer Numero:"));
const num2 = parseInt(prompt("Ingresa el Segundo Numero:"));
const num3 = parseInt(prompt("Ingresa el Tercer Numero:"));

let mayor = Math.max(num1,num2,num3);
alert(`El numero mayor es: ${mayor}`)