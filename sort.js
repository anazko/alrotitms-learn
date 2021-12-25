const arr = [23, 4, 56, 1, 2, 8, 0, 12, 57, 12, 52, 34, 33, 31, 12, 123, 32, 23, 61, 16, 17, 22, 27, 34, 43]

function findMin(arr) {
  let minIndex = 0
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i
    }
  }
  return minIndex
}

function sort(arr) {
  const sortedArr = []
  while (arr.length) {
    let min = findMin(arr)
    sortedArr.push(arr[min])
    arr.splice(min, 1)
  }
  return sortedArr
}

console.log(sort(arr))
