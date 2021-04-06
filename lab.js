console.clear();
/* TS Algorithms Lab */
/* --- Problem #1 - variable types --- */
// swap the values of these two variables and console.log() the result
// example outputs:
// console.log(numberString) => '7'
// console.log(realNumber) => 32
var numberString = '42';
var realNumber = 7;
var newVariable = realNumber.toString();
realNumber = parseInt(numberString);
numberString = newVariable;
console.log(typeof (numberString), numberString);
console.log(typeof (realNumber), realNumber);
// todo: swap the values in the variables and log the results
/* --- Problem #2 - function and mixed array type --- */
// 1. create an array type that is a mix of strings of numbers and actual numbers
// ex: [10, '34', 3, '17']
// 2. write a function that accepts an array as a parameter, loops over it and converts all the 
// strings to numbers. the function should return a new array of only numbers
// ex: stringToNum([10, '34', 3, '17']) => [10, 34, 3, 17]
// Todo write the mixed array of strings and numbers
var mixedArray = ['29', 29, 10, '10', 2, '2'];
// Todo write a function to convert the mixed array to an array of only numbers
var newArray = [];
function converter(array) {
    array.forEach(function (item) {
        if (typeof (item) === "string") {
            var newItem = parseInt(item);
            newArray.push(newItem);
        }
        else {
            newArray.push(item);
        }
    });
    return newArray;
}
console.log(converter(mixedArray));
console.log(newArray);
var chicago = ['chicago', 20, 30];
var portland = ['portland', 30, 40];
// 🚨 uncomment this function to test your solution 🚨
function printCityData(city) {
    console.log(city[0] + " is at Lat: " + city[1] + ", Long: " + city[2]);
}
printCityData(chicago);
printCityData(portland);
// Todo - Create union type here
// Todo - write area function here
