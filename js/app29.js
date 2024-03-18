/* Crear una función que devuelva el promedio de un arreglo, en caso de que el arreglo este
vacío debe devolver cero. */ 
function promedio (s){
  if( s === 0 || array.length ==0){
    alert(`Sumatoria del array es 0. El promedio es: 0`)
  }else if (array.length >0) {
    let avrg = s/array.length;
  alert(`El promedio de los numeros [${array}] es: ${avrg}%`)
  }
}
const array = []; let op=0, n=0, i=0; suma=0; alert("Promedio de un arreglo")
do{
    n = parseInt(prompt("Ingrese un número: "));
    op = parseInt(prompt("Elegir opcion:\n0. Terminar. Ver promedio.\n1. Agregar otro número al arreglo."))
    switch (op) 
    {
        case 0:
          array[i] = n; suma += array[i]; i++; 
          break;
        case 1: 
          array[i] = n; suma += array[i]  ; i++; 
          break;
        default: do{
                    alert(`Ingrese un número valido. Intentelo de nuevo...`);
                    op = parseInt(prompt("Elegir opcion:\n0. Terminar. Ver promedio.\n1. Agregar otro número al arreglo."))
                   }while(op != 0 && op != 1);
                  array[i] = n; suma += array[i]; i++;
                  break;
    }
}while(op!=0);
console.log(array);
promedio (suma);