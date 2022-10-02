//Queremos saber de la manera más rápida en que índice es que empezaron a fallar las pruebas.
//Donde true indica que todas las pruebas pasaron y false que no es así.
//Para este solo tienes que devolver el index donde ocurre el PRIMER false.
let testResults = [ true, true, true, true, true, false, false, false, false, false, false, false ];
//let resultado = null;

// Escribe aquí tu algoritmo - guarda en resultado
//El bucle for que tengo aquí,  sólo, me funciona bien, pero no consigo guardarlo en la variable "resultado".
// for (let index = 0; index < 11; index++) {  
//   if (index = "false"){    
//     console.log  (`La primera prueba fallida es en el índice ${index.length}`);
//         
//   };  
// };

let resultado = function () {
  for (let index = 0; index < 11; index++) {  
    if (index = "false"){    
      console.log  (`La primera prueba fallida es en el índice ${index.length}`);            
    };  
  };

};
console.log(resultado(testResults));
console.log(`El resultado es ${(console.log(resultado()))}`);








//testResults.forEach(() => (testResults.index = false) ? console.log(`El indice es ${index.length}`) : console.log(`Es nulo `));