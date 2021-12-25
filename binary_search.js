const git 

const search = (arr, n) => {
 
  let start = 0
  let end = arr.length - 1
  let current = Math.floor((start + end) / 2)



  while (arr[current] !== n) {
    console.log(current)
    if (arr[current] === n) return current
    else if (arr[current] > n) {
      end = current
      current = Math.floor((start + end) / 2)
    } 
    else if (arr[current] < n) {
      start = current;
      current = Math.floor((start + end) / 2)
    }
  }

  return current
 
}



search(arr, 9)