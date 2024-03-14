/* Dado el array = [1,2,3,4,5,6]
        a. Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla.
        b. Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla.
        c. Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos en pantalla.
        d. Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
        e. Generar una copia de un array pero con todos los elementos incrementados en 1.
        f. Calcular el promedio.     */
alert('Desarrollo en consola.')
let array = [1,2,3,4,5,6];

// ---- con While ----
console.log('--- WHILE ---');
let i = 0;
while(i<array.length){
    console.log(`Posicion #${i}: ${array[i]}`);
    i++;
}

// ---- con for ----
console.log('--- FOR ---');
for(i=0;i<array.length;i++){
    console.log(`Posicion #${i}: ${array[i]}`);
}

// ---- con .forEach( ----
console.log('--- FOR-EACH ---');
array.forEach((n,indice) => { console.log(`Posicion #${indice}: ${n}`) } )

// -------------------
console.log('--- INCISO D ---');
array.forEach((n,indice) => { console.log(`Posicion #${indice}: ${n+1}`) } )
  
// -------------------
console.log('--- INCISO E ---');
const arrayCopia = [];
for(i=0;i<array.length;i++){
    arrayCopia[i] = array[i]+1}
console.log(arrayCopia);

// -------------------
console.log('--- INCISO F (promedio) ---');
let suma=0;
array.forEach((n,indice)=> {
    suma += n;
});
let promedio = suma / array.length;
console.log(`El Promedio de los numeros del array ${array} es: ${promedio}%`);