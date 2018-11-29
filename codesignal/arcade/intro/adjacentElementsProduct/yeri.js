function adjacentElementsProduct(inputArray) {
    let currentProduct = 0
    let prevProduct = 0
    for (let i = 0; i < inputArray.length -1; i++ ){
        currentProduct = inputArray[i] * inputArray[i + 1];
        if(currentProduct > prevProduct ||
           (prevProduct === 0 || prevProduct < currentProduct)) {
            prevProduct = currentProduct;
        }
    }
    return prevProduct
}

/*
Recorro el arreglo, excepto la última posición porque no tiene adyacente.
Si currentProduct es mayor que prevProduct quiere decir que es un producto positivo
en caso contrario debería ser igual a cero o prevProduct menor que currentProduct
para que sea un número negativo que más se le acerca al cero.
*/
