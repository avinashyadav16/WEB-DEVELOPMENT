

const express = require('express');

const app = express()

const port = 3000;


function sum(n) {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans += i;
    }
    return ans;
}


// Users can access the server by visiting http://localhost:3000/?n=<value>, where <value> is the number they want to calculate the sum up to.

app.get('/', function (req, res) {
    // Extract the value of the query parameter 'n' from the request object
    const n = req.query.n;

    // Call the 'sum' function with the extracted value of 'n'
    const ans = sum(n);

    // Send a response to the client with the computed sum
    res.send('Hi There!, The Sum is ' + ans);
})




app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});





// Few ways in which user can give an input to the server is that
// 1. Query Parameter:
//                     After the final route put Question mark and start to add the parameters
//                      if there are more than one parameter seperate them by & sign 