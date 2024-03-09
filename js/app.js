// Escriba un programa que pida dos números y escriba en la consola cuál es el mayor.
const num1 = parseInt(prompt("Ingresa el Primer Numero:"));
const num2 = parseInt(prompt("Ingresa el Segundo Numero:"));
if(num1<num2)
    {
        alert(`${num2} es mayor que ${num1}`);
    } else if (num2<num1)
      {
    alert(`${num1} es mayor que ${num2}`);
      } else{
               alert('Ambos numeros son iguales.');
            }