function commonCharacterCount(s1, s2) {
    const menor = s1.length < s2.length ? s1 : s2;
    let mayor = s1.length < s2.length ? s2 : s1;
    const dictionary = {};
    
    for (let i = 0; i < menor.length; i++) {
        const idx = mayor.indexOf(menor[i]);
        if (idx > -1) {
            dictionary[menor[i]] = dictionary[menor[i]] !== undefined ? dictionary[menor[i]] + 1 : 1;
            const mayArr = mayor.split("");
            mayArr.splice(idx, 1);
            mayor = mayArr.join("");
        }
    }
    let sum = 0;
    for (let i in dictionary) {
        sum += dictionary[i];
    }
    return sum;
}

