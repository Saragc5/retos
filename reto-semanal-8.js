// Saber si existe una secuencia de caracteres dentro de un String...
let palabra = "manzanasyperas";
console.log(palabra);
let substring = "zanas";

function inString(){
  if (palabra.indexOf("peras") > -1){
    console.log("Sí, la palabra contiene ese string");
  } else{
    return false;
  }
}

console.log(inString());
// function inString (palabra){
//   if (palabra.indexOf('zanas') > -1){
//     console.log("zanas está dentro del string");
//   }else{
//   return false;
// }};

// console.log(inString());




// function inString(text) {
//   arrayText = text.split(" , ")
//     // if(text != text.includes("abbs")){
//     //   return false;
//     // }
    
// }
