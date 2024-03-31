/*
What is async? - Asynchronous
    Your javascript thread doesn't have access to everything immediately
    There are some tasks it needs to wait for.
    For example -
                1. Reading a file
                2. Sending a network request
                3. A deliberate timeout


Async Function usually uses:
    1. Web APIs         ⬇️  => Whatever is present here is the real async calls
    2. Callback Queues  ⬇️
    3. Event Loops      ⬇️
    4. Call Stack       ⬇️
*/


//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+//


console.log('Before the setTimeOut Function.');

setTimeout(function () {
    console.log('Hi there!, I am inside the setTimeOut Function.');
}, 1000);       // async function

console.log('After the setTimeOut Function.');


//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+//


let a = 1;
console.log(a);


const fs = require("fs");
fs.readFile('C:/Users/avina/OneDrive - Shiv Nadar Foundation/SRM - AP/FULLSTACK/0 TO 100 COHORT/WEEK 1/sampleText.txt', 'utf-8', (err, data) => {
    console.log('Content of the file is: ');
    console.log(data);
});


let ans = 0;
for (let i = 0; i < 1000; i++) {
    ans += i;
}
console.log(ans);
