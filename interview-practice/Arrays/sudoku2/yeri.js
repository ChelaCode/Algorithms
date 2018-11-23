function sudoku2(grid) {
    duplicadofila = {}
    duplicadocolumna = []
	cuadricula = []
    cuadrante = 0
    for (i = 0; i < grid.length; i++) {
        for(j=0; j < grid[i].length; j++){
            if (grid[i][j] !== '.') {
                if(duplicadofila[grid[i][j]] === undefined) { 
                    duplicadofila[grid[i][j]] = grid[i][j];
                } else {
                    return false;
                }
                if(duplicadocolumna[j] === undefined){
                    duplicadocolumna[j] = {}
                }
                if(duplicadocolumna[j][grid[i][j]] === undefined){
                    duplicadocolumna[j][grid[i][j]] = grid[i][j];
                } else {
                    return false;
                }
                if(i < 3){
                    cuadrante = retornaCuadrante(j, 0, 1, 2)
                }
                if(i>5){
                    cuadrante = retornaCuadrante(j, 3, 4, 5)
                }
                if(i>2 && i<6){
                    cuadrante = retornaCuadrante(j, 6, 7, 8)
                }
                if(cuadricula[cuadrante]=== undefined){
                    cuadricula[cuadrante] = {}
                }
                if(cuadricula[cuadrante][grid[i][j]] === undefined){
                   cuadricula[cuadrante][grid[i][j]] = grid[i][j];
                } else {
                    return false;
                }
            }
        }
        duplicadofila = {}
    }
    return true;
}

function retornaCuadrante (indice, opc1, opc2, opc3) {
    if(indice < 3) {
        return opc1
    } else if(indice < 6){
        return opc2
    } else {
        return opc3
    }
}

/* 
Busca dupicados por columna y por fila.
Al final con la funcion retornaCuadrante me ayuda a saber en que
cuadrante se encuntran los ciclos y si existe un duplicado en ese.
*/
