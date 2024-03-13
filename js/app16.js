/* Usando while, solicitar al usuario un número y utilizando console.log para mostrar la
tabla del número hasta 12. */
let n = parseInt(prompt("Ingrese un número, para mostrar la tabla de multiplicacion: (ver resultados en la consola)"));
let i = 1;
let multi;
while(i<=12){
    multi = n*i
    console.log(`${n} x ${i} = ${multi}`);
    i++;
}