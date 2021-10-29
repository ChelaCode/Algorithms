const input = [ "alert", "alter", "angel", "later", "angle", "flow", "demo", "mode", "wolf" ];

function groupAnagrams(input) {
  const output = {}
  for(let i = 0; i < input.length; i++) {
    let ind = input[i].split('').sort().join('')
    output[ind] ? output[ind].push(input[i]) : output[ind] = [input[i]]
  }
  return Object.values(output)
}
