const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();

app.use(express.json());

const port = 3000;



const ALL_USERS = [
    {
        username: "sampleMail1@gmail.com",
        password: "123",
        name: "Sample Mail 1",
    },
    {
        username: "sampleMail2@gmail.com",
        password: "12321",
        name: "Sample Mail 2",
    },
    {
        username: "sampleMail3@gmail.com",
        password: "123321",
        name: "Sample Mail 3",
    },
];


// Approach: 01

// function userExists(username, password) {
//     let userExists = false;
//     for (let i = 0; i < ALL_USERS.length; i++) {
//         if (ALL_USERS[i].username === username && ALL_USERS[i].password === password) {
//             userExists = true;
//         }
//     }
//     return userExists;
// }



// Approach: 02

function userExists(username, password) {
    // Check if any user in ALL_USERS matches the provided username and password
    return ALL_USERS.some(user => user.username === username && user.password === password);
}



// Approach: 03

// function userExists(username, password) {
//     // Check if any user in ALL_USERS matches the provided username and password
//     return ALL_USERS.map(user => user.username === username && user.password === password).includes(true);
// }






app.post("/signin", function (req, res) {

    // 1. Without object destructuring:
    // const username = req.body.username;
    // const password = req.body.password;

    // 2. Using object destructuring:
    const { username, password } = req.body;

    if (!userExists(username, password)) {
        return res.status(403).json({
            msg: "User doesn't exist in our in-memory db",
        });
    }

    var token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token
    });
});



app.get("/users", function (req, res) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        const otherUsers = ALL_USERS.filter(user => user.username !== username);
        return res.json(otherUsers);
    }
    catch (err) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});



app.listen(port, () => {
    console.log(`Server Started At ${port}`);
});