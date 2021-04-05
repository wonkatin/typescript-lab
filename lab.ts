console.clear()
/* TS Algorithms Lab */

/* --- Problem #1 - variable types --- */
// swap the values of these two variables and console.log() the result
// example outputs:
// console.log(realNumber) => 32
// console.log(numberString) => '7'

let realNumber: number = 7
let numberString: string = '42'

// todo: swap the values in the varaibles and log the results

// a var to hold realNumber so it doesn't get overwritten
let holderVar: string = realNumber.toString()
// overwrite numberString safely now
realNumber = parseInt(numberString)
// finally, assign the value of holderVar to numberString
numberString = holderVar

console.log(realNumber, typeof realNumber)
console.log(numberString, typeof numberString)


/* --- Problem #2 - function and mixed array type --- */
// 1. create an array type that is a mix of strings of numbers and actual numbers
// ex: [10, '34', 3, '17']
// 2. write a function that accepts an array as a parameter, loops over it and converts all the 
// strings to numbers. the function should return a new array of only numbers
// ex: stringToNum([10, '34', 3, '17']) => [10, 34, 3, 17]

// Todo write the mixed array of strings and numbers
let mixedArray: (number | string)[] = [10, '34', 3, '17']

// Todo write a function to convert the mixed array to an array of only numbers
const stringToNum = (arr: any): (number | string)[] => {
  for(let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i])
  }
  return arr
}

console.log(stringToNum(mixedArray))


/* --- Problem #3 - Tuple Type --- */
// 1. Create a tuple type named 'cityCoordinate' that has three elements: city name, latitute, and longitude
// 2. Create some cities with lat/lon data and pass them into printCityData;
// uncomment the function to test your solution
// hint use the type keyword to make the tuple

// Todo - create the type definition, and some cities
type cityCoordinate = [string, number, number];
let seattle: cityCoordinate = ['Seattle', 47.6, 122.2];
let spokane: cityCoordinate = ['Spokane', 47.7, 117.4];

// 🚨 uncomment this function to test your solution 🚨
function printCityData(city: cityCoordinate): void {
    console.log(`${city[0]} is at Lat: ${city[1]}, Long: ${city[2]}`);
}
printCityData(seattle)
printCityData(spokane)

/* --- Problem #4 - Interfaces and Union Types --- */
// Given the following interfaces and type declarations...
// 1. Create a union type that is the union of the Square, Rectangle, and Circle interfaces
// 2. Write the area function that: 1. Only takes in your union type as an input 2. Returns the area of the shape
// oh no! math!
// the area of a square is found by multipling the width by the width
// the area of a rectangle is found by multipling the width by the height
// the area of a circle is found by multiplying pi by the radius squared
// hint use the type keyword to make the union

interface Square {
    kind: 'square',
    width: number,
}
interface Rectangle {
    kind: 'rectangle',
    width: number,
    height: number,
}
interface Circle {
    kind: 'circle',
    radius: number,
}

// Todo - Create union type here
type Shape = Square | Rectangle | Circle;

// Todo - write area function here
function area(s: Shape): number {
    if (s.kind === "square") {
        return s.width * s.width;
    }
    else if (s.kind === "rectangle") {
        return s.width * s.height;
    }
    else if (s.kind === "circle") {
        return Math.PI * (s.radius ** 2);
    } else {
        return -1;
    }
}
