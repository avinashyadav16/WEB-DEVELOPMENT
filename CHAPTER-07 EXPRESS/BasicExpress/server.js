
const express = require("express");

// express(): Creates an Express application. The express ( ) function is a top-level function exported by the express module.
const app = express();



// app.get("/", function (request, response) {
//  console.log(request);    
// })

app.get("/", function (req, res) {
    res.send("<h1>Hello DarkModer...</h1>");
})

app.get("/about", function (req, res) {
    res.send("<h3>Hey, I'm a passionate Full-Stack Developer.</h3>");
})

app.get("/contact", function (req, res) {
    res.send("<h3>Contact me at avinashurmilayadav@gmail.com</h3>");
})

app.listen(3000, function () {
    console.log("Server has Started...");
});























