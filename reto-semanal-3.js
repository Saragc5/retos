//Cuando jugamos cartas uno de los primeros pasos es combinar y mezclar dos mazos de cartas. 
//Podemos simular este comportamiento con dos arreglos y una funciona que los combina pero de una manera desordenada.
//Tu función de Shuffle va a tomar dos arreglos como parámetros (A y B) y regresar un nuevo arreglo 
//que contiene todos los elementos del arreglo A y B pero fuera de orden. 
//Recuerda que estamos simulando cuando se baraja un mazo de cartas.
// No borrar
let A = [1, 2, 3, 4, 5];
let B = [6, 7, 8, 9, 10];

let completado = false // Cambiar a true cuando este completado

// Implementación
//Primero hago un nuevo array con los anteriores y compruebo que los datos se colocan en orden
let nuevoArray = [...A, ...B];
console.log(nuevoArray);

//Creo la función que me devuelve un solo array pero desordenado:
// function shuffle(A, B) {
//     // Escribe tu codigo aqui
   
// };

// let C = shuffle(A, B);
// console.log(shuffle());
//console.log(completado)

// var lista = [1,2,3,4,5,6,7,8,9];
// lista = lista.sort(function() {return Math.random() - 0.5});
// console.log(lista); // imprime por ejemplo: 7,9,1,5,2,3,6,4,8

//ÇEncontrado para desordenar un array

// const shuffle = (arr) =>{
//   const length = arr.length

//   for (let i = 0; i < length; i++) {
//     const rand_index = Math.floor(Math.random() * length)

//     const rand = arr[rand_index]

//     arr[rand_index] = arr[i]
//     arr[i]          = rand
//   }
// }

// const nums = [2, 11, 37, 42] 
// shuffle(nums)
// console.log(nums)