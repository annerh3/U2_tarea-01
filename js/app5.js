// Escriba un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales
const frase = prompt("Ingresa una frase:")
let fraseArray = frase.split('').filter(letra => letra !== ' '); 
let a=0,e=0,i=0,o=0,u=0;
for(j=0;j<=frase.length;j++)
{
    if((fraseArray[j] === 'a') || (fraseArray[j] === 'A') || (fraseArray[j] === 'á') || (fraseArray[j] === 'Á'))
    {a++;}

    if((fraseArray[j] === 'e') || (fraseArray[j] === 'E') || (fraseArray[j] === 'é') || (fraseArray[j] === 'É'))
    {e++;}

    if((fraseArray[j] === 'i') || (fraseArray[j] === 'I') || (fraseArray[j] === 'í') || (fraseArray[j] === 'Í'))
    {i++;}

    if((fraseArray[j] === 'o') || (fraseArray[j] === 'O') || (fraseArray[j] === 'ó') || (fraseArray[j] === 'Ó'))
    {o++;}

    if((fraseArray[j] === 'u') || (fraseArray[j] === 'U') || (fraseArray[j] === 'ú') || (fraseArray[j] === 'Ú'))
    {u++;}
}
alert(`La vocal 'A' aparece  ${a} veces.\nLa vocal 'E' aparece  ${e} veces.\nLa vocal 'I' aparece   ${i} veces.\nLa vocal 'O' aparece ${o} veces.\nLa vocal 'U' aparece ${u} veces.`)
