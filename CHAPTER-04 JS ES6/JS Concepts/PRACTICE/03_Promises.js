/*

What are promises?
    1. Just syntactical sugar
    2. Just a more readable way to write async functions

    Can you write JS without them
    Yes - Just use callbacks

*/


function myOwnSetTimeOut(duration) {
    let p = new Promise(function (resolve) {
        setTimeout(resolve, 1000);
    });
    
    return p;
}

myOwnSetTimeOut(100).then(function () {
    console.log("Log the first thing.");
});






