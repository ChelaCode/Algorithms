function isLucky(n) {
    let mitadA = 0
    let mitadB = 0
    const m = n.toString()
    for(let i = 0; i < m.length; i++) {
        if(i + 1 <= (m.length/2)) {
            mitadA = mitadA + parseInt(m[i])
        } else {
            mitadB = mitadB + parseInt(m[i])
        }
    }
    return mitadA === mitadB
}

/*
Convierto el entero en una cadena para iterar sobre el
pregunto si va a la mitad el indice para saber a que mitad debo sumar
y valido si las dos mitades son identicas
*/
