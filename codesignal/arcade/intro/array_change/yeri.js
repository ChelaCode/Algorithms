function arrayChange(inputArray) {
    let sum = 0
    for(let i = 0; i < inputArray.length; i++){
         if(inputArray[i] >= inputArray[i + 1]){
             sum += (inputArray[i] + 1) - (inputArray[i + 1])
             inputArray[i + 1] = inputArray[i] + 1
         }
    }
    return sum
}
