/* Crear una función que tome como parámetro un arreglo de números, retornar un nuevo
arreglo invirtiendo los elementos ejemplo. [1,2,3] => [3,2,1]. */ alert('Desarrollo en consola.')
function invertirArray(numbers) {
    const arrayInvertido = []
    for (let i=numbers.length-1;i>=0;i--){
        arrayInvertido.push(numbers[i]);
    }
    return arrayInvertido
}
const array = [100,200,300,400,500,600,700,800,900,1000]
console.log(`El array es: `);
console.log(array);
console.log(`El nuevo array sería: `);
console.log(invertirArray(array));