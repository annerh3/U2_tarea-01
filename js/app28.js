/*  Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que
contenga sólo las palabras que empiezan con una vocal. */ alert('Arrays en consola.');console.log('Array con palabras:');
const palabras = ["Iguana", "naranja", "banana", "Ópera", "uva", "espinaca","cereza" ,"manzana" , "limón", "elefante","Árbol"];
console.log(palabras);
const nuevoArrayCONprimeraLetraVocal = []; const vocales = ['a', 'á', 'e', 'é', 'i', 'í', 'o', 'ó', 'u', 'ú', 'A', 'Á', 'E', 'É', 'I', 'Í', 'O', 'Ó', 'U', 'Ú'];
palabras.forEach((element,index) => {obtenerPalabrasConPrimeraLetraVocal(element)})
function obtenerPalabrasConPrimeraLetraVocal(v) {
    if(vocales.includes(v[0]))   { nuevoArrayCONprimeraLetraVocal.push(v);}
}
console.log('Array con las palabras que inician con vocales del array anterior:');
console.log(nuevoArrayCONprimeraLetraVocal);