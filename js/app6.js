// Escribir un programa que escriba en pantalla los divisores de un número dado
const num = parseInt(prompt("Ingresa un Numero:"));
let divisores = [];
let j=0;
for (let i=0;i<=num;i++){
    if(num % i == 0){
        divisores[j] = i
        j++;
    }
}
alert(`Los divisores de ${num} son:\n${divisores[' ']}`)