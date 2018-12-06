function allLongestStrings(inputArray) {
    let longestArray = []
    let maxSize = 0
    inputArray.forEach((item) => {
        if(item.length > maxSize) {
            maxSize = item.length
            longestArray = []
        }
        if(item.length === maxSize) {
            longestArray.push(item)
        }
    })
    return longestArray
}
/*
Itero por cada una de las cadenas, si el tamaño es mayor al de maxSize
limpio el arreglo y agrega el nuevo tamaño maximo.

Si el el tamaño maximo es el mismo que el tamaño de la cadena entonces lo agrego al arreglo longestArray
*/
