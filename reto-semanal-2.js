// Para el reto de hoy vamos a manejar dos Arrays separados.
//La meta es encontrar la multiplicación más grande entre dos elemento de el Array.
//Los Array no están ordenado
let a1 = [ 3, 1, 2, 8, 13, 9, 1, 1, 2, 3, 4, 10, 12, 11, 1, 1];
let a2 = [ 5, 7, 7, 7, 7, 2, 1, 2, 0];

let resultado = 0;

// Escribe tu algoritmo - guarda en resultado.

//Ahora tengo que buscar los dos valores mayores de los dos array:
//1.Para eso primero lo ordeno:
const naturalOrder = (a, b) => a - b;
let a1ordenado = structuredClone(a1).sort(naturalOrder);
let a2ordenado = structuredClone(a2).sort(naturalOrder);
console.log(a1ordenado);
console.log(a2ordenado);
//2.Y ahora multiplico los dos valores últimos que serán los mayores:
//Aquí, le digo que me extraiga el valor que tenga el array en la última posición, que después de ordenado, es el número mayor del array.
const elem1 = a1ordenado[a1ordenado.length-1];
const elem2 = a2ordenado[a2ordenado.length-1];
console.log(`El número mayor de a1 es ${elem1} y de a2 ${elem2}`);

//Reasigno valor a la variable resultado para poder mostrar por consola.
let resultado1 = elem1*elem2;
resultado = resultado + resultado1;
console.log(`El resultado de multiplicar los dos números mayores de ambos arrays es ${resultado}`);









//let multiplicacionMayor1 = (a3ordenado.length)*(a3ordenado.length-1);
//console.log(multiplicacionMayor1);
// console.log(a1ordenado.length);//esto me da la longitud del array
// console.log(a2ordenado.length);
// let rrresultado = a1ordenado.length*a2ordenado.length;//Esto no me vale, me multiplica los índices
// console.log(rrresultado);

// const naturalOrder = (a, b) => a - b;
// const a1ordenado = structuredClone(a1).sort(naturalOrder);
// const a2ordenado = structuredClone(a2).sort(naturalOrder);
// console.log(a1ordenado, a2ordenado);

//Multipilicar los indices cuyo numero sea mayor:

//let multiplicacionMayor = (a1ordenado.length)*(a2ordenado.length);

//console.log(multiplicacionMayor);

