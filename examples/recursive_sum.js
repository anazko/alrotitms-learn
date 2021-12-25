// сумма элементов массива рекурсией

const arr = [1,2,3,4,5,6,7,8]

const sum = (arr) => {
  if (arr.length === 0) return 0
  if (arr.length === 1) return arr[0]
  return arr[0] + sum(arr.slice(1))
}

console.log(sum(arr))