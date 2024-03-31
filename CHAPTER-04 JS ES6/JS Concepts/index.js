console.log("Hello World.");
console.log("a");

let variable = 2;
console.log(variable);

const num = 3.14;
console.log(num);
// num = 6.28;


//     Callbacks Function

function sum(num1, num2) {
    let result = num1 + num2;
    return result;
}

function displayResult(data) {
    console.log("\nResult of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("\nSum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum
displayResult(sum(3, 6));
displayResultPassive(sum(6, 11));


// Best Approach For a call back Function:
// function sum(num1, num2, fnToCall) {
//     let result = num1 + num2;
//     fnToCall(result);
// }

// function displayResult(data) {
//     console.log("\nResult of the sum is : " + data);
// }

// function displayResultPassive(data) {
//     console.log("\nSum's result is : " + data);
// }

// sum(3, 6, displayResult);
// sum(6, 11, displayResultPassive);





function greetHuman(call2Alien) {
    console.log('Hello World.');
    call2Alien();
}

function greetAlien() {
    console.log("Hello Universe..");
}

setInterval(function () {
    greetHuman(greetAlien);
}, 1000);















