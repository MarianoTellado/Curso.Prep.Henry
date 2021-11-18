// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
 
  var array=[];
    for (clave in objeto){
      var array_t=[]
      array_t.push(clave);
      array_t.push(objeto[clave]);
      array.push(array_t);
  }
  return array;
}



function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var repeticiones=[];
  var objeto={};
  for(e in string){
    repeticiones=[];
    for (var i = 0; i <= string.length; i++) {
        if(string[e]===string[i]){
        repeticiones.push(i);
      }

    }
    //agrega nuevas propiedades en el objeto "objeto"
    objeto[string[e]]=repeticiones.length;
    //console.log(string[e]+" "+repeticiones.length+" "+objeto);
  }
  var ordered = {};
  Object.keys(objeto).sort().forEach(function(key) {
  ordered[key] = objeto[key];
  })
  console.log(objeto);
  return  ordered;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var resultado='';
  for(i in s){
    if (s[i]===s[i].toUpperCase()){
      console.log("si")
      resultado=resultado+s[i];
    }
  }  
  for(i in s){
    if (s[i]===s[i].toLowerCase()){
      console.log("si")
      resultado=resultado+s[i];
    }
  } 
return resultado;

}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var array_frase=str.split(" ");    
  var frase_invertida=[];
  var palabra_invertida="";

  for (i in array_frase){
    palabra_invertida="";

    for (var a = 0;a<=array_frase[i].length-1; a++){
      palabra_invertida=array_frase[i][a]+palabra_invertida;
    }
      frase_invertida.push(palabra_invertida);
  }
  return frase_invertida.join(" ");
}


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numero_str=numero.toString();
  var numero_inv="";
  for (var i = 0; i < numero_str.length; i++) {
    numero_inv=numero_str[i]+numero_inv;
  }
  if(numero_inv === numero_str){
    return "Es capicua";
  }else{
    return "No es capicua";
  }

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var resultado="";
  for (var i = 0; i < cadena.length; i++) {
    if (cadena[i]!=="a" && cadena[i]!=="b" && cadena[i]!=="c"){
      resultado=resultado+cadena[i];
    }
  }
  return resultado;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  function comparar ( a, b ){ return a.length - b.length; }
  return arr.sort(comparar);
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  var resultado=[];
  for (i in arreglo1){

    if(arreglo2.includes(arreglo1[i])){
      resultado.push(arreglo1[i]);
    }
  }

return resultado;
   
}




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

