// binary search or insert




var search = function(nums, target) {
 
  let start = 0
  let end = nums.length - 1
  let current

  while (start <= end) {
    current = Math.round( ((end - start) / 2) + start )
    
    if (nums[current] === target) return current

    if (nums[current] > target ) {
      end = current - 1
    }
    else {
      start = current + 1
    }

  }

  return -1
}


const nums = [2,3,5,6,8,9,10,11]
// const nums = [1,3,5,6]
// const nums = [1,3,5]

// console.log(searchInsert(nums, 1))
// console.log(searchInsert(nums, 2))
console.log(search(nums, 6))