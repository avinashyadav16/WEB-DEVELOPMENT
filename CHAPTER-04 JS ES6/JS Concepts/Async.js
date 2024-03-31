function findSum(n) {
    let ans = 0;

    for (let i = 0; i < n; i++) {
        ans += i;
    }
    return ans;
}

function findSumTill100() {
    console.log(findSum(100));
}

// Calling A Async Function
setTimeout(findSumTill100, 3000);
console.log("Hello World!");


//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

// In order to make sync
// We can use BUSY WAITING
// The thread is not actually sync but it is busy in some work for long
function syncSleep() {
    let ans = 0;
    for (let i = 0; i < 1000000000; i++) {
        ans++;
    }
}

// This will take time and CPU resources     
syncSleep();
console.log("Hello World! After Sync");




//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

// OUTPUT EXECUTION WILL BE
// Hello World!
// Hello World! After Sync
// 4950

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

// Some Async Function:
// setTimeout
// fs.readFile
// Fetch



const fs = require("fs");

fs.readFile("WEEK 1/sampleText.txt", "utf-8", function (err, data) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

console.log("outside the readFile Block"); // this will be displayed before the above readfile async function
