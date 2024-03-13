/* Escribir un programa JavaScript en el que el programa escoge al azar un entero entre 1 y
10, el usuario , luego a el usuario se le pedirá que introduzca un número en un popup
para intentar adivinarlo. Si la entrada del usuario coincide con el número de conjetura, el
programa mostrará un mensaje de "buen trabajo" de lo contrario mostrará un mensaje de
"Vuelva a intentarlo"  */

let numeroRandom = Math.floor(Math.random() * 10) + 1;
console.log(numeroRandom);
const numADV = parseInt(prompt("Se genero un numero aleatorio entre 1 y 10.\nAdivine el numero:"));

if(numADV===numeroRandom){
    alert('Correcto, buen trabajo!')
}else{
    alert('Incorrecto. Vuelva a intentarlo.')
}
