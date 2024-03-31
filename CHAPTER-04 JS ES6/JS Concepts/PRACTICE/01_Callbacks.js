// Simple Callbacks :=>
// Function which calls another function or 
// Function which gets another function as input

function square(n) {
    return n * n;
}

function cube(n) {
    return n * n * n;
}

function sumOfNumberPower(a, b, callbackfxn) {
    let num1 = callbackfxn(a);
    let num2 = callbackfxn(b);
    return num1 + num2;
}

let result1 = sumOfNumberPower(2, 4, square);
let result2 = sumOfNumberPower(2, 4, cube);

console.log('Sum of Squares is: ' + result1);
console.log('Sum of Cubes is: ' + result2);












