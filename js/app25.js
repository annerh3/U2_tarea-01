// Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si
// un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
let array = ["azul", "amarillo", "rojo", "verde", "café", "rosa"]
const colorDelUsuario = prompt("Ingrese el color que desea buscar (minusculas y acentos: ")
    if(array.includes(colorDelUsuario)){
        alert(`El color "${colorDelUsuario}" SI se encuentra en el array.`);
    }else{
        alert(`El color "${colorDelUsuario}" NO se encuentra en el array.`);
    }
console.log(array);