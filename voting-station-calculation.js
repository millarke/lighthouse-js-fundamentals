//In order for a station to be deemed appropriate, it must have a capacity of at least 20, 
//and be a school or community centre.

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];



function chooseStations(stations)
{
  let choosenStations = [];
  for (const station of stations)
  {
    let capacity = station[1];
    
    if (capacity >= 20)
    {
      const type = station[2];
      if (type === "school" || type === "community centre")
      {
        choosenStations.push(station[0]);
      }
    }
  }
  return choosenStations;
}

console.log(chooseStations(stations));