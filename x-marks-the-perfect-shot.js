const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

function finalPosition(moves)
{
  let finalCoordinates = [];
  let x = 0;
  let y = 0;
  for (const direction of moves)
  {
    if (direction === 'north')
    {
      y += 1;
    }
    else if (direction === 'south')
    {
      y -= 1;
    }
    else if (direction === 'east')
    {
      x += 1;
    }
    else if (direction === 'west')
    {
      x -= 1;
    }
  }
  finalCoordinates.push(x);
  finalCoordinates.push(y);
  
  return finalCoordinates;
}

console.log(finalPosition(moves));