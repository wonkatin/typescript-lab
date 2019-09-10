/* TS Algorithms Lab */

/* --- Problem #1 - Tuple Type --- */
// 1. Create a type definition called 'cityCoordinate' that is a tuple containing city name, latitute, and longitude
// 2. Create some cities with lat/lon data and pass them into printCityData;

// Todo - create the type definition, and some cities

function printCityData(city: cityCoordinate) {
    console.log(`${city[0]} is at Lat: ${city[1]}, Long: ${city[2]}`);
}

// printCityData(seattle);

/* --- Problem #2 - Interfaces and Union Types --- */
// Given the following interfaces and type declarations...
// 1. Create a union type that is the union of the Square, Rectangle, and Circle interfaces
// 2. Write the area function that: 1. Only takes in your union type as an input 2. Returns the area of the shape
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

// Todo - write area function here


/* --- Problem #3 - Generics --- */
// 1. Write the reverseArray generic function that reverses the input array
// 2. Make sure the two input arguments, as well as the function return type are all using the Generic type
// Handy documentation here: https://www.typescriptlang.org/docs/handbook/generics.html

// Todo - write reverseArray

/* --- Problem #4 - Generics --- */
// 1. Write the concatArrays generic function that returns the two input arrays concatenated  
// 2. Make sure the two input arguments, as well as the function return type are all using the Generic type

// Todo - write concatArrays()

/* --- Problem #5 - Bonus Problem --- */
// Bonus - Implement a Stack with TypeScript
// https://initjs.org/data-structure-stack-in-javascript-714f45dbf889