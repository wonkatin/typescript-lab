console.clear();
/* TS Algorithms Lab */
/* --- Problem #1 - variable types --- */
// swap the values of these two variables and console.log() the result
// example outputs:
// console.log(realNumber) => 32
// console.log(numberString) => '7'
var realNumber = 7;
var numberString = '42';
// todo: swap the values in the varaibles and log the results
// a var to hold realNumber so it doesn't get overwritten
var holderVar = realNumber.toString();
// overwrite numberString safely now
realNumber = parseInt(numberString);
// finally, assign the value of holderVar to numberString
numberString = holderVar;
console.log(realNumber, typeof realNumber);
console.log(numberString, typeof numberString);
/* --- Problem #2 - function and mixed array type --- */
// 1. create an array type that is a mix of strings of numbers and actual numbers
// ex: [10, '34', 3, '17']
// 2. write a function that accepts an array as a parameter, loops over it and converts all the 
// strings to numbers. the function should return a new array of only numbers
// ex: stringToNum([10, '34', 3, '17']) => [10, 34, 3, 17]
// Todo write the mixed array of strings and numbers
var mixedArray = [10, '34', 3, '17'];
// Todo write a function to convert the mixed array to an array of only numbers
var stringToNum = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = parseInt(arr[i]);
    }
    return arr;
};
console.log(stringToNum(mixedArray));
var seattle = ['Seattle', 47.6, 122.2];
var spokane = ['Spokane', 47.7, 117.4];
// 🚨 uncomment this function to test your solution 🚨
function printCityData(city) {
    console.log(city[0] + " is at Lat: " + city[1] + ", Long: " + city[2]);
}
printCityData(seattle);
printCityData(spokane);
// Todo - write area function here
function area(s) {
    if (s.kind === "square") {
        return s.width * s.width;
    }
    else if (s.kind === "rectangle") {
        return s.width * s.height;
    }
    else if (s.kind === "circle") {
        return Math.PI * (Math.pow(s.radius, 2));
    }
    else {
        return -1;
    }
}
