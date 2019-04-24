function sortByHeight(a) {
    const heights = a.filter(size => size !== -1)
    const orderHeights= heights.sort( (a,b) => a - b )
    let contOrderPosition = 0
    for(let i = 0; i < a.length; i++) {
        if(a[i] !== -1) {
            a[i] = orderHeights[contOrderPosition]
            contOrderPosition ++
        }
    }
    return a
}
