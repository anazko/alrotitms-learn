// https://leetcode.com/problems/trapping-rain-water/
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

// Решение 1: тупой перебор.

const height1 = [0,1,0,2,1,0,1,3,2,1,2,1]
const height2 = [4,2,0,3,2,5]

const trap = function(height) {
  
  let count = 0
  let maxHeight = Math.max(...height)
  const revercedHeight = [...height].reverse()
  
  for (let i = 1; i <= maxHeight; i++) {

    let start = height.findIndex(h => (h >= i && h <= maxHeight))
    let end = height.length - revercedHeight.findIndex(h => (h >= i && h <= maxHeight)) - 1

    for (let n = start; n <= end; n++) {
      if (height[n] < i) count++;      
    }

  }

  return count
}

// console.log(trap(height1))
console.log(trap(height2))








