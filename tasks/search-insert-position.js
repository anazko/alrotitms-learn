// https://leetcode.com/problems/search-insert-position/
// 35. Search Insert Position

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
 
  let start = 0
  let end = nums.length - 1
  let current = Math.floor((start + end) / 2)

  while (nums[current] !== target) {
    
    if (nums[current] > target) {
      end = current
      current = Math.floor((start + end) / 2)
    }

    if (nums[current] < target) {
      start = current
      current = Math.floor((start + end) / 2)
    }

    if (nums[current] === target) return current

    if (end - start <= 1) {
      if (target < nums[0]) return 0
      if (target > nums[nums.length - 1]) return nums.length
      return end
    }

  }

  return current
}

// const nums = [2,3,5,6,8,9,10,11]
// const nums = [1,3,5,6]
const nums = [1,3,5]

// console.log(searchInsert(nums, 1))
// console.log(searchInsert(nums, 2))
console.log(searchInsert(nums, 1))

