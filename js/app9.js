// Crear un programa que determine si un string introducido por un usuario inicia con un
// número o con una letra.
const texto = prompt("Ingresa un texto:")
let textoArray = texto.split('').filter(char => (char !== ' ')); 

if (/[0-9]/.test(textoArray[0]) /* devuele un bool */) { 
      console.log("La cadena inicia con un número.");
    } else {
            console.log("La cadena inicia con una letra.");
           }

/*  const texto = prompt("Ingresa un texto:");
let textoArray = [];

for (let i = 0; i < texto.length; i++) 
{
  if (texto[i] !== ' ' && texto[i] !== ',') {
    textoArray.push(texto[i]);
  }
}
               --> ESTE CODIGO ME PUEDE SERVIR EN OTRO .JS :)
               
 console.log(textoArray); */
