/*
 * - Your `buildTriangle()` function should take one argument (or you can say parameter)
 * - Your `laugh()` function should build the triangle as describe above
 */

// creates a line of * for a given length
function makeLine(length) 
{
  let line = "";
  for (let j = 1; j <= length; j++) 
  {
    line += "* ";
  }
  return line + "\n";
}

function buildTriangle(size)
{
  triangle = "";
  for (let x = 1; x <= size; x++)
  {
    triangle += makeLine(x);
  }
  return triangle;
}

console.log(buildTriangle(10));
