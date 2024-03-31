
// NORMAL SYNTAX:

function avinash1AsyncFunction() {
    let p = new Promise(function (resolve) {
        // do some async logic here
        resolve("hi there!")
    });
    return p;
}

function main() {
    avinash1AsyncFunction().then(function (value) {
        console.log(value);
    });
}

main();


////////////////////////////////////////

// ASYNC / AWAIT SYNTAX:

function avinash2AsyncFunction() {
    let p = new Promise(function (resolve) {
        // do some async logic here
        resolve("hi there!")
    });
    return p;
}

async function main() {
    const value = await avinash2AsyncFunction();
    console.log(value);
}

main();