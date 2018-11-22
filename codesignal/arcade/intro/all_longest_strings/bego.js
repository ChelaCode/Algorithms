function allLongestStrings(inputArray) {
    let longestStringLength = 0;
    let allLongest = [];
    inputArray.forEach(input => {
        const wordLength = input.length;
        if (wordLength > longestStringLength) {
            longestStringLength = wordLength;
            allLongest = [].concat(input);
        } else if (wordLength === longestStringLength) {
            allLongest.push(input);
        }
    });
    return allLongest;
}

