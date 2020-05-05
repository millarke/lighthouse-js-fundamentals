// Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.

// emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
// Prints: "I am happy, haha!"
 /*
 * - Your code should call the `emotions()` function
 * - Your `emotions()` function call should have an inline function expression passed as the second parameter
 * - Your function expression should return the expected output
 */

// emotions() function definition
function emotions(myString, myFunc) 
{
  console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here

emotions("happy", function laugh(num){
  let laugh = "";
  for (i = 0; i < num; i++)
  {
    laugh += "ha";
  }
  laugh = laugh + "!";
  return laugh;
})


// laugh(num)
// {
//   let laugh = "";
//   for (i = 0; i<= num; i++)
//   {
//     laugh += "ha";
//   }
//   laugh += laugh + "!";
//   return laugh;
// }

// emotions("happy", myFunc(2));

// // Call the emotions() function with two arguments
// // Argument 1 - "happy" string
// // Argument 2 - an inline function expression

// // function declaration that takes in two arguments: a function for displaying
// // a message, along with a name of a movie
// function movies(messageFunction, name) 
// {
//   messageFunction(name);
// }

// // call the movies function, pass in the function and name of movie
// movies(function displayFavorite(movieName){console.log("My favorite movie is " + movieName);}, "Finding Nemo");