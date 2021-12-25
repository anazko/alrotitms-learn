//  https://www.youtube.com/watch?v=EfjHjwoHh-w&list=PL0k-9Y7O1GwccXKHRzmvVj17yB7T9pjTo&index=28'
//  Это задача про валютные транзакции за день. Нам необходимо из массива всех валютных операций за день создать объект с суммами всех операций по каждой валюте. 

const input = [
  ['usd', 'buy', 10000],
  ['usd', 'sell', 5000],
  ['gbp', 'buy', 9000],
  ['eur', 'sell', 7000],
  ['uah', 'buy', 10000],
  ['usd', 'sell', 25000],
];

// const output = {
//   usd: [10000, 30000],
//   gbp: [9000, 0],
//   eur: [0, 7000],
//   uah: [10000, 0]
// }

const output = {}

input.forEach(item => {
  const [currency, operation, value] = item
  if (!output[currency]) {
    output[currency] = [0, 0]
  }
  if (operation === 'buy') {
    output[currency][0] += value
  } else {
    output[currency][1] += value
  }
})


const output2 = input.reduce((acc, item) => {
  const [currency, operation, value] = item
  if (!acc[currency]) {
    acc[currency] = [0,0]
  }
  if (operation === 'buy') {
    acc[currency][0] += value
  } else {
    acc[currency][1] += value
  }
  return acc
}, {})

console.log(output2)

