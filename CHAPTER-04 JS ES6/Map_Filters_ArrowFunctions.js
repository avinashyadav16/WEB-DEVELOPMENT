/////////////////////////////////////////////////////////

// Arrow Function:

function sumNormal(a, b) {
    return a + b;
}

const sumArrow = (a, b) => {
    return a + b;
}

const ansNormal = sumNormal(10, 20);
const ansArrow = sumArrow(10, 20);
// console.log(ansNormal);
// console.log(ansArrow);




/////////////////////////////////////////////////////////

// Map:
// given an array, give me back a new array in which every value is multiplied by 2
// InputArray: [1, 2, 3, 4, 5]
// OutputArray: [2, 4, 6, 8, 10]


// Layman / Normal Approach:
const inputArray1 = [1, 2, 3, 4, 5];
const outputArray1 = [];

for (let i = 0; i < inputArray1.length; i++) {
    outputArray1.push(inputArray1[i] * 2);
}
//console.log(outputArray1)


// Map Approach:
function transformation(i) {
    return i * 2;
}
const outputArray2 = inputArray1.map(transformation);
//console.log(outputArray2);



// Condensed Form:
const outputArray3 = inputArray1.map((i) => {
    return i * 2;
});
//console.log(outputArray3);


/////////////////////////////////////////////////////////


// Filter:
// given an Input array, give me back all the even values from it

// ugly way of doing it:
const inputArray2 = [1, 2, 3, 4, 5];
const outputArray4 = []

for (let i = 0; i < inputArray2.length; i++) {
    if (inputArray2[i] % 2 === 0) {
        outputArray4.push(inputArray2[i]);
    }
}
//console.log(outputArray4);


// Filtering Logic:
function filterLogic(i) {
    if (i % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

const outputArray5 = inputArray2.filter(filterLogic);
//console.log(outputArray5);



// Condensed Form:
const outputArray6 = inputArray2.filter((i) => {
    if (i % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
});
console.log(outputArray6);


