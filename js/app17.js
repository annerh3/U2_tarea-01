/* Usar while, realizar la suma de todos los números pares entre N y M donde N y M los
ingresa un usuario */
let n = parseInt(prompt("Ingrese un número (límite inferior): "));
let m = parseInt(prompt("Ingrese un número (límite superior): "));
let suma = 0, i = n;
while (i <= m) {
    if (i % 2 === 0) {suma += i}
    i++;       }
alert(`La suma de los números pares entre ${n} y ${m} es: ${suma}`);