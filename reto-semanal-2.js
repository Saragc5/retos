// Para el reto de hoy vamos a manejar dos Arrays separados.
//La meta es encontrar la multiplicación más grande entre dos elemento de el Array.
//Los Array no están ordenado
let a1 = [ 3, 1, 2, 8, 13, 9, 1, 1, 2, 3, 4, 10, 12, 11, 1, 1];
let a2 = [ 5, 7, 7, 7, 7, 2, 1, 2, 0];

let resultado = 0;

// Escribe tu algoritmo - guarda en resultado.
//1.-Unir los dos arrays en uno solo, con el spread operator, combinar:

let a3 = [...a1, ...a2];
console.log(a3, a3.length);

//2.-Buscar los dos números mayores de todos ellos y multiplicarlos entre sí y guardar en resultado:
//Con esta función encuentro el valor máximo del a3:
let maximo = Math.max.apply(null, a3);
console.log(maximo);
//Ahora tengo que buscar los dos valores mayores del array:
















//console.log(resultado);
// const naturalOrder = (a, b) => a - b;
// const a1ordenado = structuredClone(a1).sort(naturalOrder);
// const a2ordenado = structuredClone(a2).sort(naturalOrder);
// console.log(a1ordenado, a2ordenado);

//Multipilicar los indices cuyo numero sea mayor:

//let multiplicacionMayor = (a1ordenado.length)*(a2ordenado.length);


//console.log(multiplicacionMayor);

