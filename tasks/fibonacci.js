

// const fib = (n) => {
//   if (n <= 1) return 0
  
//   let a = 0
//   let b = 1
//   let c

//   for (i = 2; i <= n; i++) {
//     c = a + b
//     b = a
//     a = c
//   }

//   return c
// }

const fib = (n) => {
  if (n <= 1) return 0
  if (n === 2) return 1
 
  return fib(n-1) + fib(n-2) 
}




console.log(fib(10))