// https://leetcode.com/problems/trapping-rain-water/
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

// Решение 2: Сбор информации по столбцам

const height1 = [0,1,0,2,1,0,1,3,2,1,2,1]
const height2 = [4,2,0,3,2,5]

const trap = function(height) {
  
  const columns = []
  let count = 0
  let minLeft = 0
  let minRight = 0

  for (let i = 0; i < height.length; i++) {
    columns.push({})
    columns[i].minLeft = minLeft
    if (minLeft < height[i]) minLeft = height[i]
  }

  for (let i = height.length - 1; i >= 0; i--) {
    columns[i].minRight = minRight
    if (minRight < height[i]) minRight = height[i]
  }

  for (let i = 0; i < height.length; i++) {
    let minLR = Math.min(columns[i].minLeft, columns[i].minRight)
    let maxWater = minLR - height[i]
    if (maxWater > 0) count += maxWater
  }

  return count
}


// console.log(trap(height1))
console.log(trap(height2))








