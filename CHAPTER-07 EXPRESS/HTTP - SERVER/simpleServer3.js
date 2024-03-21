
const express = require('express');
const app = express();
const port = 3000;

// for parsing application/json
app.use(express.json());



const users = [{
    name: 'Sam',
    kidneys: [{
        healthy: false
    }]
}];



app.get('/', function (req, res) {
    const firstUserKidneys = users[0].kidneys;
    const numOfKidneys = firstUserKidneys.length;

    let numOfHealthyKidneys = 0;
    let numOfUnhealthyKidneys = 0;

    for (let i = 0; i < firstUserKidneys.length; i++) {
        if (firstUserKidneys[i].healthy) {
            numOfHealthyKidneys++;
        }
        else {
            numOfUnhealthyKidneys++;
        }
    }

    res.json({
        numOfKidneys: numOfKidneys,
        numOfHealthyKidneys: numOfHealthyKidneys,
        numOfUnhealthyKidneys: numOfUnhealthyKidneys
    });
});




// for post request, we send the data in the body
app.post('/', function (req, res) {
    // this will be a boolean value from the client side
    const isHealthy = req.body.isHealthy;

    users[0].kidneys.push({
        healthy: isHealthy
    });

    res.json({
        msg: 'Done!'
    })
})


app.put('/', function (req, res) {
    // Check if all kidneys are already healthy
    let allHealthy = true;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            allHealthy = false;

            // Exit the loop as soon as an unhealthy kidney is found
            break;
        }
    }

    // If all kidneys are already healthy, respond with a 304 Not Modified status
    if (allHealthy) {
        return res.status(304).json({ error: "All kidneys are already healthy" });
    }

    // If not all kidneys are healthy, proceed to update their health status
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }

    // Send a response indicating that the kidneys have been marked healthy
    res.json({ msg: "All kidneys have been marked healthy" });
});



app.delete('/', function (req, res) {
    // only if atleast one unhealthy kidney is there do this, else return 411
    let atleastOneUnhealthyKidney = false;

    // Check if there is at least one unhealthy kidney
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            atleastOneUnhealthyKidney = true;

            // Exit the loop once an unhealthy kidney is found
            break;
        }
    }

    // If there's no unhealthy kidney, return 411 Length Required status
    if (!atleastOneUnhealthyKidney) {
        return res.status(411).json({ error: "At least one unhealthy kidney is required for deletion" });
    }

    const newKidneys = [];


    for (let i = 0; i < users[0].kidneys.length; i++) {

        if (users[0].kidneys[i].healthy) {
            newKidneys.push({
                healthy: true
            });
        }
    }


    users[0].kidneys = newKidneys;

    // Send a response indicating successful deletion
    res.json({ msg: "Unhealthy kidneys have been deleted" });
});




app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})
