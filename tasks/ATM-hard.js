// БАНКОМАТ 2

function iWantToGet(amountRequired, limites) {
  let amount = amountRequired
  const notes = []

  for (limit in limites) {
    console.log(limit, limites[limit])
  }

  return notes
}



let limits = { 1000: 5, 500: 2, 100: 5, 50: 100, 30: 6 };

//console.log(iWantToGet(1000, limits)); // {1000: 1}
console.log(iWantToGet(230, limits)); // {30: 1, 100: 2}
//console.log(iWantToGet(200, limits)); // {100: 2}
//console.log(iWantToGet(150, limits)); // {50: 1, 100: 1}
//console.log(iWantToGet(120, limits)); // {30: 4}
//console.log(iWantToGet(275, limits));



