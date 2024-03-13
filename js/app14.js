/* Usando while mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo
ingresa el usuario en un prompt. */

let n = parseInt(prompt("Ingrese el numero donde terminara el conteo de 2 en 2: (ver resultados en la consola)"));
let i = 0;
while (n % 2 !== 0) {
    alert('No puede ingresar numeros impares. Vuelva a ingresar el numero.');
    n = parseInt(prompt("Ingrese el numero donde terminara el conteo de 2 en 2: (ver resultados en la consola)"));
}
while (i < n) {
    i += 2;
    console.log(i);
}
