"use strict";
/* TS Algorithms Lab */
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var seattle = ['Seattle', 47.6, 122.2];
var spokane = ['Spokane', 47.7, 117.4];
function printCityData(city) {
    console.log(city[0] + " is at Lat: " + city[1] + ", Long: " + city[2]);
}
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
/* --- Problem #3 - Generics --- */
// 1. Write the reverseArray generic function that reverses the input array
// 2. Make sure the two input arguments, as well as the function return type are all using the Generic type
// Handy documentation here: https://www.typescriptlang.org/docs/handbook/generics.html
function reverseArray(items) {
    var retArr = [];
    for (var i = items.length - 1; i >= 0; i--) {
        retArr.push(items[i]);
    }
    return retArr;
}
/* --- Problem #4 - Generics --- */
// 1. Write the concatArrays generic function that returns the two input arrays concatenated  
// 2. Make sure the two input arguments, as well as the function return type are all using the Generic type
// Todo - write concatArrays()
// function concatArrays
function concatArrays(arr1, arr2) {
    var retArr = __spreadArrays(arr1, arr2);
    return retArr;
}
/* --- Problem #5 - Bonus Problem --- */
// Bonus - Implement a Stack with TypeScript
// https://initjs.org/data-structure-stack-in-javascript-714f45dbf889
