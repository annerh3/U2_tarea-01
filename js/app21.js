/* Crear una función que reciba un número entero y muestre un error si el tipo de dato
    pasado es de otro tipo.  */
   let num = parseFloat(prompt("Ingrese un número entero: "));
   function verificarEntero(x)
    {
      if(Number.isInteger(x) && !isNaN(x))
      {
        alert('Si, es un número entero.')
      }else if(isNaN(x) || !Number.isInteger(x))
        {
            alert('ERROR')
        }     
    };
    verificarEntero(num);