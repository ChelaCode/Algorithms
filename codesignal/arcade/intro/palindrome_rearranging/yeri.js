function palindromeRearranging(inputString) {
    let char = {}
    let flag = true
    if(inputString.length === 1) {
        return true
    }
    for(let i = 0; i < inputString.length; i++) {
        if(char[inputString[i]] === undefined) {
            char[inputString[i]] = 1
        } else {
            char[inputString[i]] += 1
        }
    }
    for (const ind in char) {
        if(char[ind] % 2 !== 0) {
            if(flag){
                flag = false
            } else {
                return false
            }
        }
    }
    return true
}
