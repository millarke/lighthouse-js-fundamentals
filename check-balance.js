var balance = -325;
var checkBalance = true;
var isActive = true;

// Start only if checkBalance === true
if (checkBalance === true) 
{
  if (isActive === true && balance > 0) 
  {
    console.log("Your balance is $" + balance.toFixed(2) + ".");
  }
  else if (isActive === true && balance === 0)
  {
    console.log("Your account is empty.");
  } 
  else if (isActive === true && balance < 0)
  {    
    console.log("Your balance is negative. Please contact bank.");
  }
  else if (isActive === false) 
  {    
    console.log("Your account is no longer active.");
  }
}
else 
{
  console.log("Thank you. Have a nice day!");
}






// FIRST ATTEMPT 
// if (checkBalance === false)
// {
//   console.log('Thank you. Have a nice day!');
// }
// else if (checkBalance === true && balance >= 0)
// {
//   if (isActive === false)
//   {
//     console.log('Your accouunt is no longer active.')
//   }
// }

//SECOND ATTEMPT - didn't use the new fancy && stuff like i should have
// if (checkBalance === true)
// {
//   if (balance > 0)
//   {
//     console.log('Your balance is $' + balance + '.');
//   }
//   else if (isActive === false)
//   {
//     console.log('Your account is no longer active.')
//   }
//   else if (balance === 0)
//   {
//     console.log('Your account is empty')
//   }
//   else 
//   {
//     console.log('Your balance is negative. Please contact the bank.')
//   }
// }
// else
// {
//   console.log('Thank you. Have a nice day!')
// }


// ANSWER
// // change the values of `balance`, `checkBalance`, and `isActive` to test your code
// var balance = -325;
// var checkBalance = true;
// var isActive = true;

// // Start only if checkBalance === true
// if (checkBalance === true) {
//     // Cases when account is active. Now, the balance could be <, =, or > zero
//     if (isActive === true && balance > 0) {
//         console.log("Your balance is $" + balance.toFixed(2) + ".");
//     }
//     else if (isActive === true && balance === 0){
//         console.log("Your account is empty.");
//     } 
//     else if (isActive === true && balance < 0){
//         console.log("Your balance is negative. Please contact bank.");
//     }
//     // Case when account is NOT active
//     else if (isActive === false) {
//         console.log("Your account is no longer active.");
//     }  
// } 
// else {
//   console.log("Thank you. Have a nice day!");
// }