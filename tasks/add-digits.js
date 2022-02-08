// https://leetcode.com/problems/add-digits/

// 258. Add Digits

// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// Example 1:
// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2

// Since 2 has only one digit, return it.

// Example 2:
// Input: num = 0
// Output: 0

// Follow up: Could you do it without any loop/recursion in O(1) runtime?



const addDigits = function(num) {
  if (num <= 0) return 0
  if (num < 10) return num
  
  // many loops :(
  // num = num.toString().split('').reduce((acc, item) => { return +acc + +item }, 0)

  let sum = 0

  while (num > 0) {
    sum += num % 10
    num = Math.floor(num / 10)
  }

  return addDigits(sum)
}

console.log(addDigits(38))