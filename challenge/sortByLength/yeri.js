function sortByLength(inputArray) {
    let indLength = []
    let result = []
    for(let i = 0; i < inputArray.length; i++) {
        if(indLength.indexOf(inputArray[i].length) === -1){
             indLength.push(inputArray[i].length)
        }
    }
    indLength.sort((a,b) => a-b)
    for(let j = 0; j < indLength.length; j++) {
        result = [ ...result, ...inputArray.filter(word => word.length === indLength[j])]
    }
    return result
}
