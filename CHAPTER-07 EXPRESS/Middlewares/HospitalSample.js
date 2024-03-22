
const express = require('express');

const app = express();

const port = 3000;


// Ugly Way Of Doing Authentication And Input Validation:
/*
app.get('/health-checkup', (req, res) => {

    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if (username != 'avinash' || password != 'pass') {
        res.status(400).json({ message: 'Invalid username or password...' });
        return
    }

    if (kidneyId != 1 && kidneyId != 2) {
        res.status(400).json({ message: 'Invalid kidneyId...' });
        return
    }

    res.json({
        message: `Hello ${username}, Your Kidney is Fine.`
    });
});
*/


// Right Way with Middlewares:
function userMiddleware(req, res, next) {

    const username = req.headers.username;
    const password = req.headers.password;

    if (username != 'avinash' || password != 'pass') {
        return res.status(400).json({ message: 'Invalid username or password...' });
    }

    // If username and password are correct, proceed to the next middleware
    next();
};


function kidneyMiddleware(req, res, next) {

    const kidneyId = req.query.kidneyId;

    if (kidneyId != 1 && kidneyId != 2) {
        return res.status(400).json({ message: 'Invalid kidneyId...' });
    }

    // If kidneyId is valid, proceed to the route handler
    next();
};


app.get('/health-checkup', userMiddleware, kidneyMiddleware, (req, res) => {


    res.json({
        message: `Hello User, Your Kidney is Fine.`
    });

});


// Extracting The Body And Giving It In JSON Format:
app.use(express.json());
app.post('/health-checkup', (req, res) => {
    // kidneys = [ 1, 2]
    // if (!req.body.kidneys || !Array.isArray(req.body.kidneys)) {
    //     return res.status(400).json({ message: 'Invalid! Expecting an array of kidneys.' });
    // }

    // Extract the kidneys array from the request body
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send(`You Have ${kidneyLength} Kidney.`);
});

// Global Catches: (Takes 4 inputs)
// This global catches will prevent exposing our exception that occured in our DBs
app.use((err, req, res, next) => {
    res.status(400).json({ message: 'Sorry! Something Turned Up With Our Server...' });
})




app.listen(port, () => {
    console.log(`Server Started at ${port}`);
});






