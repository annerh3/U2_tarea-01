/* Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con
solo los números pares.  Pista: utilizar reduce(). */ alert('Arrays en consola')
const array =  []; let n = 10;
for(let i=0;i<n;i++)  {array[i] = Math.floor(Math.random() * 100) + 1;}
console.log('Array con numeros pares e impares:');console.log(array);
const  nuevoArray = [];
for(let k =0;k<array.length;k++)  {numeroParesDElarray(array[k]);}
  function numeroParesDElarray (e)  {if(e%2==0){nuevoArray.push(e)}}
console.log('Nuevo Array con solo los numeros pares del Array anterior:');console.log(nuevoArray);//cual reduce? 😜 xd