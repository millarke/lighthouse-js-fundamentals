function howManyHundreds(bottles)
{
  let remainingBottles = bottles % 100;
  let boxes = bottles - remainingBottles;
  boxes = boxes / 100;

  return boxes;
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);