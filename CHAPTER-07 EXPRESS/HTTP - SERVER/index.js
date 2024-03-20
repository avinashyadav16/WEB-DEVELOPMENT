
// STEP-1: initialize the npm to bring the package.json file
//          npm init -y

// STEP-2: Install expree locally to the system:
//          npm install express


// Importing the express library:
const express = require('express');


// Creating and exposing an http server:

// Initialize Express framework and create an instance named 'app'
const app = express();

// Define the port number on which the server will listen
const port = 3000

// Set up a route for handling GET requests to the root URL '/'
app.get('/', (req, res) => {
    // Send a response of 'Initialized HTTP Server!' to clients accessing the root URL
    res.send('Initialized HTTP Server!');
})

// Start the HTTP server, listening on the specified port
app.listen(port, () => {
    console.log(`App Listening on Port ${port}`);
})