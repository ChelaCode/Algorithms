function makeArrayConsecutive2(statues) {
    let orderStatues = statues.sort((a, b) => a - b);
    let sizeArray = statues.length - 1;
    let mod = 0;
    for(let i =0; i < sizeArray; i++) {
        if((orderStatues[i] + 1) != orderStatues[i + 1]){
            mod += (orderStatues[i + 1] - orderStatues[i]) - 1;
        }
    }
    return mod;
}
