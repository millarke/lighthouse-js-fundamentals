
// should return an empty array [] if given incorrect parameters, such as:
// start, end, or step being undefined
// start being greater than end
// step being 0, or negative

// At some point in your code, you may want to use some_array.push(some_value)

function range(start, end, step) {
  let array = [];
  let num = start;
  if (step <= 0)
  {
    return array
  }
  else
  {
    while (num <= end)
    {
      array.push(num);
      num += step;
    }
  }
  return array;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(40, 30, 1));
console.log(range(10, 30, -1));
console.log(range(40, 1));
