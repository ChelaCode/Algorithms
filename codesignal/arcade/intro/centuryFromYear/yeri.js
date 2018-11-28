function centuryFromYear(year) {
    if (year%100 === 0){
        return year/100
    } else {
        return Math.trunc(year/100) + 1
    }
}

/*
Funcion que recibe un año y devulve el siglo en el que se encuentra
Revisa que el residuo sea cero, si es el caso regresa la división del
número entre 100, en caso contrario obtiene sólo los enteros de la división
y le agrega uno.
*/
