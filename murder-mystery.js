// Room Options - billiards room, dining room, gallery, or ballroom
var room = "billiards room";
// A suspect can be either of - Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, or Mr. Kalehoff
var suspect = "Mr. Parkes"; 

// Don't touch these, these get set in the conditionals below
var weapon = "";
var solved = false;

if (room === 'billiards room') 
{
  weapon = 'pool stick';
  if (suspect === 'Mrs. Sparr')
  {
    solved = true;
  }
}
else if (room === 'dining room')
{
  weapon = 'knife';
  if (suspect === 'Mr. Parkes')
  {
    solved = true;
  }
}
else if (room === 'gallery')
{
  weapon = 'trophy';
  if (suspect === 'Ms. Van Cleve')
  {
    solved = true;
  }
}
// I made this one an else if because i think it's clearer and makes no real difference 
else if (room === 'ballroom')
{
  weapon = 'poison';
  if (suspect === 'Mr. Kalehoff')
  {
    solved = true;
  }
}

// The code below will run only when `solved` is true
if (solved) 
{
	console.log(suspect + ' did it in the ' + room + ' with the ' + weapon + '!');
}

//I added this last part because this problem sucked and was boring without it
else
{
  console.log(suspect + ' did not do it in the ' + room + '!');
}