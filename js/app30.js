/* Crear una función que tome como parámetro un arreglo de números, retornar el número menor,
 si es un número negativo mostrar su valor absoluto. */ alert('Retornar el número menor de un arreglo.')
 function encontrarMenor(numeros) {
    let menor = Math.min(...numeros);
    if (menor < 0) {menor = Math.abs(menor)}
    return menor;
  }
const array = []; let op=0, n=0, i=0; suma=0; 
do{
    n = parseInt(prompt("Ingrese un número: "));
    op = parseInt(prompt("Elegir opcion:\n0. Terminar. Ver numero menor.\n1. Agregar otro número al arreglo."))
    switch (op) 
    {
        case 0:
          array[i] = n; i++; 
          break;
        case 1: 
          array[i] = n;  i++; 
          break;
        default: do{
                    alert(`Ingrese un número valido. Intentelo de nuevo...`);
                    op = parseInt(prompt("Elegir opcion:\n0. Terminar. Ver número emor.\n1. Agregar otro número al arreglo."))
                   }while(op != 0 && op != 1);
                  array[i] = n; i++;
                  break;
    }
}while(op!=0);
console.log(array);
const menorNumero = encontrarMenor(array)
alert(`El menor número (valor absoluto si es negativo): ${menorNumero}`);