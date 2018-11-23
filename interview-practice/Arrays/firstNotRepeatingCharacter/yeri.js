function firstNotRepeatingCharacter(a) {
    let b = {};
    for(let i=0; i < a.length; i++){
        let tmp = a[i];
        
        if(b[tmp]) {
          b[tmp] += 1; }
          else{
            b[tmp]=1;
          }
    }
    for (var prop in b) {
      if(b[prop] == 1){
        return prop;
      }
      
    }
    return '_';
}

/*
Recorre el arreglo 'a', cada valor lo guarda en 'tmp'
si existe 'tmp' en el objeto le incrementa 1 cada vez que lo encuentra 
y si no lo encuentra lo inicializa con uno.

El segundo ciclo es para ver si un elemento se represento solo una vez y si se encuentra regresa ese valor,
en caso de que no exista ninguno solo regresa '-'
*/
