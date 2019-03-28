function matrixElementsSum(matrix) {
    let roomHaunted = []
    let sumRoomCost = 0
    for(i = 0; i < matrix.length; i++) {
        for(j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] === 0){
                roomHaunted.push(j)
            }
            sumRoomCost+= (roomHaunted.indexOf(j) >= 0) ? 0 : matrix[i][j]
        }
    }
    return sumRoomCost
}
 
