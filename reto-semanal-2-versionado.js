// Para el reto de hoy vamos a manejar dos Arrays separados.
//La meta es encontrar la multiplicación más grande entre dos elemento de el Array.
//Los Array no están ordenado
let a1 = [ 3, 1, 2, 8, 13, 9, 1, 1, 2, 3, 4, 10, 12, 11, 1, 1];
let a2 = [ 5, 7, 7, 7, 7, 2, 1, 2, 0];

let resultado = 0;

// Escribe tu algoritmo - guarda en resultado.

//Aquí para conseguir la multiplicación mayor de todos los números de los dos arrays:
//1.-Unir los dos arrays en uno solo, con el spread operator, combinar:

let a3 = [...a1, ...a2];
console.log(`Nuevo array a3: ${a3}, Longitud nuevo array ${a3.length}`);

//2.-Buscar los dos números mayores de todos ellos y multiplicarlos entre sí y guardar en resultado:

//Ahora tengo que buscar los dos valores mayores del array:
//1.Para eso primero lo ordeno:
const naturalOrder = (a, b) => a - b;
let a3ordenado = structuredClone(a3).sort(naturalOrder);
console.log(`El nuevo array ordenado es ${a3ordenado}`);
//2.Y ahora multiplico los dos valores últimos que serán los mayores:

console.log(`El número mayor del a3 está en el índice ${a3ordenado.length}`);
console.log(`El siguiente número mayor está en el índice  ${a3ordenado.length-1}`);

function multiplicarLosNumerosMayores (){
  let multiplicar = 1;
  for (let i = 0; i < a3ordenado.length; i++) {
    const element1 = a3ordenado[i];
    const element2 = a3ordenado[i-1];

    multiplicar = element1*element2;    
  }
  return multiplicar;
}
console.log(`El resultado de la multiplicación de los dos números mayores del a3 es ${multiplicarLosNumerosMayores()}`);
//Redefino la variable resultado, ya que no la puedo borrar:
// let resultado1 = elem1*elem2;
// resultado = resultado + resultado1;








//let multiplicacionMayor = (a3ordenado.length)*(a3ordenado.length-1);
//console.log(multiplicacionMayor);
//Con esta función encuentro el valor máximo del array a3:
// let maximo = Math.max.apply(null, a3);
// console.log(maximo);











