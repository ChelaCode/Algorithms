function checkPalindrome(inputString) {
    for (i=0; i< inputString.length; i++) {
        if(inputString[i] !== inputString[inputString.length - 1 - i]) {
            return false
        }
    }
    return true
}

/*
Recorre la palabra comparando indices del primero al ultimo
si alguno no corresponde devuelve false
*/
