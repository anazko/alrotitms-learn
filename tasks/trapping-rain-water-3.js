// https://leetcode.com/problems/trapping-rain-water/
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

// Решение 3: Два указателя

const height1 = [0,1,0,2,1,0,1,3,2,1,2,1]
const height2 = [4,2,0,3,2,5]

const trap = function(height) {

  let count = 0
  let maxLeft = height[0]
  let maxRight =  height[height.length - 1]
  let left = 1
  let right = height.length - 2

  while (left <= right) {
    if (maxLeft <= maxRight) {
      if ( Math.min(maxLeft, maxRight) - height[left] > 0) {
        count += Math.min(maxLeft, maxRight) - height[left]
      }     
      maxLeft = Math.max(height[left], maxLeft)
      left += 1
    } else {
      if ( Math.min(maxLeft, maxRight) - height[right] > 0) {
        count += Math.min(maxLeft, maxRight) -height[right]
      }
      maxRight = Math.max(height[right], maxRight)
      right -= 1
    }
  }
  
  return count
}


console.log(trap(height1))
console.log(trap(height2))








