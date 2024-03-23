/*
This code sets up a basic Express server with MongoDB integration, 
implementing three endpoints /signup, /signin, and /user, along with a /remove-user endpoint.
*/


const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://USERNAME:PASSWORD@samplecluster.zypqw6c.mongodb.net/sampleUser");


const sampleUser = mongoose.model(
    'sampleuser',
    {
        name: String,
        email: String,
        password: String
    });


const jwt = require("jsonwebtoken");
const jwtPassword = "123456";



const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;



////////////////////////////////////////////////////////////////////////////



// We have to create backend logic for a server
// that's somehow connected to database And
// end-user can send one of three requests:


// 1. /signup: will give us username, email and password
//              and we have to put them in DB,
//              provided someone with this email doesn't exists.
app.post('/signup', async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const isNewUserExists = await sampleUser.findOne({ email: email });
    if (isNewUserExists) {
        return res.status(400).send('User With Given E-Mail Already Exists...');
    }

    const newUser = new sampleUser({
        name: name,
        email: email,
        password: password
    });

    await newUser.save();
    res.json({
        msg: "User Signed Up Successfully!"
    });
});



////////////////////////////////////////////////////////////////////////////



// 2. /signin: backend needs to check whether the user really exists,
//              and the password is correct, if that's the case,
//              we'll return them back JWT, else stop them.

// Function to verify user credentials
function userExists(email, password) {
    return sampleUser.findOne({ email: email, password: password });
}

app.get('/signin', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const user = await userExists(email, password);
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // If user exists and password is correct, generate JWT
        const token = jwt.sign({ email: email }, jwtPassword);

        res.json({ token });
    }
    catch (error) {
        console.error('Error signing in:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



////////////////////////////////////////////////////////////////////////////



// 3. /user: Where we expect a header, that user sends us,
//              and the JWT that they got on signin page,
//              with that we hit the DB, get back all the users,
//              and return back to the user that's asking for it.


// Fetching all the users:
// Middleware function to verify JWT token
function verifyToken(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }

    jwt.verify(token, jwtPassword, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Invalid token' });
        }
        req.email = decoded.email;
        next();
    });
}

app.get('/user', verifyToken, async (req, res) => {
    try {
        const users = await sampleUser.find();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.use((err, req, res, next) => {
    res.status(400).json({ message: 'Sorry! Something went wrong...' });
})


// Fetching all the other users excluding the current user
/*
app.get("/user", async function (req, res) {
    const token = req.headers.authorization;

    try {
        const decoded = jwt.verify(token, jwtPassword);
        const email = decoded.email;

        // Fetch user data
        const userData = await User.findOne({ email: email });
        if (!userData) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Fetch other users excluding the current user
        const otherUsers = await User.find({ email: { $ne: email } });

        res.status(200).json(otherUsers);
    } 
    catch (err) {
        console.error('Error:', err);
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});
*/


////////////////////////////////////////////////////////////////////////////



app.delete("/remove-user", async function (req, res) {
    const token = req.headers.authorization;

    try {
        const decode = jwt.verify(token, jwtPassword);
        const email = decoded.email;

        const deletedUser = await User.deleteOne({ email: email });

        if (deletedUser.deletedCount > 0) {
            res.status(200).json({ message: "User deleted Successfully..." });
        }
        else {
            res.status(404).json({ message: "User not found!" });
        }
    } catch (err) {
        res.status(500).json({ message: "Internal server errorr.." });
    }
});



////////////////////////////////////////////////////////////////////////////



app.listen(port, () => {
    console.log(`Server Started At Port http://localhost:${port}`);
});