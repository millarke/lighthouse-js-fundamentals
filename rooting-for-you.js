function judgeVegetable(vegetables, metric) {
  
  let currentWinner = null;
  vegetables.forEach(function(vegetable) {
    if (currentWinner === null || currentWinner[metric] < vegetable[metric])
    {
      currentWinner = vegetable;
    }
  });
  return currentWinner.submitter;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const metric = 'plumpness';

console.log(judgeVegetable(vegetables, metric));