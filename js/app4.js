// Escriba un programa que pida una frase y escriba cuantas veces aparece la letra a.

const frase = prompt("Ingresa una frase:")
// paso la cadena un array
let fraseArray = frase.split('').filter(letra => letra !== ' '); 
//función devuelve true si la letra no es un espacio en blanco, y false si es un espacio en blanco.
let a=0;
for(i=0;i<=frase.length;i++)
{
    if((fraseArray[i] === 'a') || (fraseArray[i] === 'A') || (fraseArray[i] === 'á') || (fraseArray[i] === 'Á'))
    {
        a++;
    }
}
alert(`La letra 'A' aparece ${a} veces en la frase: \n\n"${frase}"`)