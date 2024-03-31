// promises: The syntatical sugar
//          The wrapper on the top of a async function
//          If we are using primises, then there are no call backs.


const fs1 = require('fs');

function avinashReadFile(cb) {
    fs1.readFile('WEEK 1/sampleText.txt', 'utf-8', function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
        cb(data);
    });
}

function onDone(data) {
    console.log(data);
}

avinashReadFile(onDone);


// //////////////////

const fs2 = require('fs');

function avinashReadFile1() {
    console.log('Inside avinashReadFile');
    return new Promise(function (resolve) {
        console.log('inside Promise');
        fs2.readFile('WEEK 1/sampleText.txt', 'utf-8', function (err, data) {
            console.log('inside resolve');
            resolve(data);
        });
    })
}


function onDone(data) {
    console.log(data);
}

avinashReadFile1().then(onDone);


// What even is a promise?
// It is just a class that makes callbacks and async functions slightly more readable.
// It is similar to initializing a class But Whenever we are initializing promises,
// We have to give to give the first argument as a function and the function also needs to have first argument something as resolve.

// A promise at a high level has 3 states:
// 1. Pending => Promise pending means that onDone has not been called yet.
// 2. resolved
// 3. Rejected



// => pending, resolved
var d = new Promise(function (resolve) {
    resolve();
});

function callback() {
    console.log(d);
}

d.then(callback);




function avinashAsyncFunction() {
    let p = new Promise(function (resolve) {
        resolve("hi there");
    });
    return p;
}

const value = avinashAsyncFunction();
value.then(function (data) {
    console.log(data);
})


