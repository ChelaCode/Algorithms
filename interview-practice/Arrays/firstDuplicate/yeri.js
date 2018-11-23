function firstDuplicate (a) {
  var diccionario = {};
  for (var [llave, valor] of Object.entries(a)) {
    if(diccionario[valor] !== undefined){
	  return valor;
	} else {
	  diccionario[valor] = llave
	}
  }
  return -1;
}

/*
Recorre el objeto y lo separa en llave valor,
si el valor ya se encuentra en el diccionario regresa el valor
si no se encuentra lo agrega al diccionario.
En caso de que no encuentre repetidos regresa un -1
*/
