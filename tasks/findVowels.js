// посчитать, сколько гласных в строке

const findVowels = (str) => {
  str = str.toLowerCase()
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
  let count = 0
  for (char of str) {
    if (vowels.includes(char)) count++
  }
  return count 
}

const findVowels2 = (str) => {
  const matched = str.match(/[aeiouy]/gi)
  return matched ? matched.length : 0
}


console.log(findVowels('bla-bla-bla-blobla'))
console.log(findVowels2('bla-bla-bla-blobla'))