

// const anagram = (str1, str2) => {
//   str1 = str1.toLowerCase().split('').sort().join()
//   str2 = str2.toLowerCase().split('').sort().join()
//   return str1 === str2
// }

const anagram = (str1, str2) => {
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()

  const charsSet1 = {}
  const charsSet2 = {}
  
  for (char of str1) {
    charsSet1[char] = charsSet1[char] + 1 || 1
  }
  for (char of str2) {
    charsSet2[char] = charsSet2[char] + 1 || 1
  }

  if (Object.keys(charsSet1).length !== Object.keys(charsSet2).length) return false

  for (key of Object.keys(charsSet1)) {
    if (charsSet1[key] !== charsSet2[key]) return false
  }

  return true

}



console.log(anagram("Hello", "Goodbye"))
console.log(anagram("Hello", "Lehlo"))
console.log(anagram("agagabla", "ablaagga"))
console.log(anagram("Friend", "Finder"))