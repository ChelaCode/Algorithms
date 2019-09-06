function reverseInParentheses(inputString) {
   let ind1 = inputString.lastIndexOf('(')
   if(ind1 === -1) {
    return inputString
   }
   let ind2 = inputString.indexOf(')', ind1)
   let inputString2 = inputString.slice(0,ind1)
   let inputString3 = inputString.slice(ind2 + 1)
   let inputString4 = inputString.substr(ind1, ind2 - ind1 + 1)
   let cad = ''
   if (inputString4.length > 2) {
      cad = inputString4.substr(1, inputString4.length - 2)
      cad = cad.split('').reverse().join('')
   } else {
      cad = ''
   }
   inputString = `${inputString2}${cad}${inputString3}`
   if(inputString.indexOf('(') === -1) {
		console.log(inputString)
		return inputString
	} else {
		return reverseInParentheses(inputString)
	}
}
