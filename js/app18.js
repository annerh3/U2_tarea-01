// Todos los ejercicios de while anteriores los debe replicar con el ciclo for. (13 al 17)

// ------------------------------------------------------

//  /* 13 -- Usando while mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo
// ingresa el usuario en un prompt */

const n = parseInt(prompt("Ingrese el numero donde terminara el conteo de 1 en 1:\n(ver resultados en la consola)"));
for(let i=1;i<=n;i++){console.log(i)}
 
// ------------------------------------------------------

// 14 --  Usando while mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo
// ingresa el usuario en un prompt. 

// let n = parseInt(prompt("Ingrese el numero donde terminara el conteo de 2 en 2: (ver resultados en la consola)"));
//     while (n % 2 !== 0) { alert('No puede ingresar numeros impares. Vuelva a ingresar el numero.');
//                           n = parseInt(prompt("Ingrese el numero donde terminara el conteo de 2 en 2: (ver resultados en la consola)"));}
// for(let i=0;i<=n;i+=2){console.log(i)}

// ------------------------------------------------------

// /*  15 --  Usando while mostrar todos los números de N a 1 disminuyendo de 1 en 1 donde n lo
// ingresa el usuario en un prompt. */

// let n = parseInt(prompt("Ingrese el número donde empezará el conteo de 1 en 1: (ver resultados en la consola)"));
// for(let i=n;n>=1;n--){console.log(n)}

// ------------------------------------------------------

// /* 16 --  Usando while, solicitar al usuario un número y utilizando console.log para mostrar la
// tabla del número hasta 12. */

// let n = parseInt(prompt("Ingrese un número, para mostrar la tabla de multiplicacion: (ver resultados en la consola)")), multi;
// console.log(`Tabla de Multiplicar de: ${n}\n-------------------------------------------`);
// for(let i=1;i<=12;i++){multi = n*i; console.log(`${n} x ${i} = ${multi}`)}

// ------------------------------------------------------

// /* 17 -- Usar while, realizar la suma de todos los números pares entre N y M donde N y M los
// ingresa un usuario */

// let n = parseInt(prompt("Ingrese un número (límite inferior): "));
// let m = parseInt(prompt("Ingrese un número (límite superior): "));
// let suma = 0;

// for(let i=n;i<=m;i++){ if (i % 2 === 0) {suma += i}
//                        console.log(suma)}
// alert(`La suma de los números pares entre ${n} y ${m} es: ${suma}`);


// ------------------------------------------------------