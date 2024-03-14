/* Usando for, crear un programa que determine si un número es perfecto o no, (se dice
   que un número es perfecto si el número es igual a sus divisores, ejemplos 6 = 1 + 2 + 3). */

let num = parseInt(prompt("-- Determinar si el numero ingresado es perfecto. --\nIngrese un número: "));

let divisores = [], j=0;
let sumaDivisores=0;
for (let i=0;i<num;i++){
    if(num % i == 0){
        divisores[j] = i
        sumaDivisores += i
        j++;
    }
}
if(sumaDivisores === num){
        alert(`ES PERFECTO! (^^)\nPorque la suma de los divisores de ${num} (${divisores}) es: ${sumaDivisores}.`)
}else{
    alert(`NO ES PERFECTO! :-[\nPorque la suma de los divisores de ${num} (${divisores}) no es ${num} sino: ${sumaDivisores}`)

}
