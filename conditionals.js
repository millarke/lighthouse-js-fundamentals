const temperature = 55;
let severeTemp = false
let raining = false

if (temperature < -40 || temperature > 40) 
{
  console.log("Maybe going outside isn't such a great idea…");
  severeTemp = true
}

if ((severeTemp == false))
{
  if (temperature < 0)
  {
    console.log("Make sure you pick out a scarf!");
  } 
  else if (temperature < 15) 
  {
    console.log("Short sleeves won't cut it!");
  } 
  else 
  {
    console.log("Short sleeves are fine.");
  }
}

if (!raining && severeTemp == false) {
  console.log("Leave your umbrella at home!");
}

//console.log("Now you're ready to go outside!");


// const isCitizen = true;
// const age = 26;

// if (isCitizen && age > 18) {
//   console.log("You are eligible to vote.");
// }

// const raining = true;
// const cold = false;

// if (raining) {
//   console.log("Don't forget your umbrella!");
// }

// if (cold) {
//   console.log("Make sure you pick out a scarf!");
// }

// console.log("Now you're ready to go outside!");