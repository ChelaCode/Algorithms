function avoidObstacles(inputArray) {
    const topLimit = Math.max(...inputArray)
    let jump = 2
    let nextJump = true
    let totalJump = 2
    do {
        if(inputArray.indexOf(totalJump) >= 0){
            jump += 1
            totalJump = jump
        } else {
            nextJump = totalJump < topLimit
            totalJump += jump
        }
    } while (nextJump)
    return jump
}
