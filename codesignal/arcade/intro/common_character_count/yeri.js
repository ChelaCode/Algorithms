function commonCharacterCount(s1, s2) {
    let commonA = []

    for(i=0; i < s1.length; i++) {
        if(s2.indexOf(s1[i]) > -1) {
            if(commonA[s1[i]] === undefined){
                commonA[s1[i]] = 1
            } else {
                let commonB = 0
                for(j=0; j < s2.length; j++) {
                    if(s2[j] === s1[i]) {
                        commonB ++
                    }
                }
                if( commonA[s1[i]] !== commonB){
                    commonA[s1[i]] = commonA[s1[i]] + 1
                }
            }
        }
    }
    let sumadetodo = 0
    Object.values(commonA).forEach(function(numero) {
        sumadetodo = sumadetodo + numero
    });
    return sumadetodo
}

/*
Itera sobre los elementos de s1
Busca que cada elemento tenga una coincidencia en el arreglo s2
Si tiene una coincidencia llena el arreglo commonA
Al fina suma todas las coincidencias
*/
