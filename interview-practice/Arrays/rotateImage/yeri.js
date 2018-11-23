function rotateImage(a) {
    arreglo = [];
    for(i = 0; i < a.length; i++) {
        for(j = 0; j < a[i].length; j++) {
            if(!arreglo[j]) {
                arreglo[j] = [];
            }
            arreglo[j][a.length-1-i] = a[i][j];
        }
    }
    return arreglo;
}

/*
Dos ciclos anidados checo que se puedan crear el mismo numero 
de filas que tiene el arreglo que se recibe.

Como las filas se vuelven columnas me voy al ultimo lugar de cada arreglo
para meter el valor de cada fila

*/
