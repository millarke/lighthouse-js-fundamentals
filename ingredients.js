const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while(i < ingredients.length)
{
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:
for(let z = 0; z < ingredients.length; z++)
{
  console.log(ingredients[z]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
let x = (ingredients.length - 1);
while(x >= 0)
{
  console.log(ingredients[x]);
  x--;
}