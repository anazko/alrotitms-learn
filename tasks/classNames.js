// создать массив классов, отсортированный по частоте использования
// in: ['header', 'menu', 'menu-item', 'menu-item', 'menu-item', 'footer', 'menu', 'link', 'link', 'link', 'link']
// out:['link', 'menu-item', 'menu', 'header', 'footer']


let classNames = [
  'header', 'menu', 'menu-item', 'menu-item', 'menu-item', 'footer', 'menu', 'link', 'link', 'link', 'link'
]

const classNamesCount = {}

for (className of classNames) {
  classNamesCount[className] = classNamesCount[className] + 1 || 1
}

// for (className in classNamesCount) {
//   sortedClassnames.push(className)
// }

// sortedClassnames.sort((a, b) => {
//   return classNamesCount[b] - classNamesCount[a]
// })

const uniqueClassNames = Object.keys(classNamesCount)

uniqueClassNames.sort((a, b) => {
  return classNamesCount[b] - classNamesCount[a]
})

console.log(uniqueClassNames)