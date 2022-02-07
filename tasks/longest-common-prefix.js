// https://leetcode.com/problems/longest-common-prefix/

// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".


// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function(strs) {
  if (!strs.length) return ''
  if (strs.length === 1) return strs[0]
  let result = ''
  
  function compareTwo(str1, str2) {
    let result = ""
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] === str2[i]) { 
        result += str1[i]
      }
      else return result
    }
    return result
  }

  result = compareTwo(strs[0], strs[1])

  for (let i = 0; i < strs.length; i++) {
    result = compareTwo(result, strs[i])
  }

  return result
};



console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["cir","car"]))
console.log(longestCommonPrefix(["aaa","aa","aaa"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))
console.log(longestCommonPrefix([]))
