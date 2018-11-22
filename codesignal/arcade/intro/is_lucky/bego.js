function isLucky(n) {
    let sumLeft = 0;
    let sumRight = 0;
    n.toString().split("").reduce((prev, curr, idx, array) => {
        const length = array.length;
        if (length === 2) {
            sumLeft = prev;
            sumRight = curr;
        }
        if (idx < (length/2)) {
            sumLeft = (prev * 1) + (curr * 1);
            return sumLeft;
        }
            if (idx === (length / 2)) {
                return curr;
            }
        sumRight = (prev * 1) + (curr * 1);
        return sumRight;
    });
    return sumLeft === sumRight;
}

