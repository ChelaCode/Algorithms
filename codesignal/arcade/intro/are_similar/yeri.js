function areSimilar(a, b) {
    let numberSwap = 0
    let swapA = 0
    let swapB = 0
    for(let i = 0; i < a.length; i++){
        if(a[i] !== b[i]){
            numberSwap ++
            if(numberSwap === 3) {
                return false
            }
            if(numberSwap === 1) {
                swapA = a[i]
                swapB = b[i]
            }
            if(numberSwap === 2) {
                if(a[i] !== swapB || b[i] !== swapA) {
                    return false
                }
            }
        }
    }
    return true
}
