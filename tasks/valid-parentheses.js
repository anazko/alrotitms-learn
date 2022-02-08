// https://leetcode.com/problems/valid-parentheses/

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

var isValid = function(s) {
    const stack = []

    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case "(": {
                stack.push(s[i])
                break
            }
            case "[": {
                stack.push(s[i])
                break
            }
            case "{": {
                stack.push(s[i])
                break
            }
            case ")": {
                if (stack[stack.length - 1] === "(") {
                    stack.pop()
                } 
                else return false
                break
            }
            case "]": {
                if (stack[stack.length - 1] === "[") {
                    stack.pop()
                } 
                else return false
                break
            }
            case "}": {
                if (stack[stack.length - 1] === "{") {
                    stack.pop()
                } 
                else return false
                break
            }
        }
    }
    if (stack.length > 0) return false
    return true
}

console.log("((()))", isValid("((()))"))
console.log("(([]))", isValid("(([]))"))
console.log("(([]))[]{}", isValid("(([]))[]{}"))