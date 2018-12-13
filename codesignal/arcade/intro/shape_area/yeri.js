function shapeArea(n) {
    if(n === 1) {
        return 1
    }
    let eje = ((n - 1) * 4) + 1
    let limMax = n - 2
    if (limMax <= 0) {
        return eje
    }
    let acumula = n - 2
    for(let ind = 0; ind < limMax; ind++) {
        acumula = acumula + ind
    }
    return eje + (acumula * 4)
}
