// БАНКОМАТ
// REQUIREMENTS:
// 1. Always deliver the lowest number of possible notes;
// 2. It's possible to get the amount requested with available notes;
// 3. The client balance is infinite;
// 4. Amount of notes is infinite;
// 5. Available notes 100, 50, 20 10

function iWantToGet(amountRequired) {
  let amount = amountRequired
  const availableNotes = [100, 50, 20, 10]
  const notes = []

  for (note of availableNotes) {
    while (amount - note >= 0) {
      amount -= note
      notes.push(note)
    }
  }

  return notes
}

console.log(iWantToGet(380))