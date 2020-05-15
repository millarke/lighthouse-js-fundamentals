function carPassing(cars, speed)
{
  const time = Date.now();

  const car = {
    time: time,
    speed: speed
  };

  cars.push(car);
  return cars;
}

const cars = [
  {
    time: 1568329654807,
    speed: 40
  },
  {
    time: 1568329821632,
    speed: 42
  },
  {
    time: 1568331115463,
    speed: 35
  }
];

const speed = 38;

console.log(carPassing(cars, speed));


//if we called the function with below
// console.log(
// const cars = [
//   {
//     time: 1568329654807,
//     speed: 40,
//   },
//   {
//     time: 1568329821632,
//     speed: 42,
//   },
//   {
//     time: 1568331115463,
//     speed: 35
//   }
// ]

// const speed = 38;

// carPassing(cars, speed));

// we can expect it to return below

// [
//   {
//     time: 1568329654807,
//     speed: 40,
//   },
//   {
//     time: 1568329821632,
//     speed: 42,
//   },
//   {
//     time: 1568331115463,
//     speed: 35
//   },
//   {
//     time: 1568431216417,
//     speed: 38
//   }
// ]