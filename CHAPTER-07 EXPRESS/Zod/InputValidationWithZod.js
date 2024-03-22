
const express = require('express');
const zod = require('zod');

const app = express();
app.use(express.json());

const port = 3000;


// User input should be an array of number
const schema = zod.array(zod.number());
app.post('/health-checkup', (req, res) => {
    // kidneys = [ 1, 2]
    const kidneys = req.body.kidneys;

    // Validating the schema of the input:
    const response = schema.safeParse(kidneys);

    if (!response.success) {
        res.status(411).json({
            msg: 'Input is Invalid!'
        });
    }
    else {
        res.send({
            response
        });
    }
});


// ZOD SCHEMA FOR BELOW, TOP LEVEL OBJECT:
/*
{
    email: string => email,
    password: string => atleat 8 letters,
    country: "IN" or "US"
}
*/
/*
const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
    country: zod.literal("IN").or(zod.literal("US"))
})
*/


function validateInput(obj) {
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })

    const response = schema.safeParse(obj);

    //console.log(response);
    return response;

}

// validateInput({
//     email: 'avinashurmilayadav@gmail.com',
//     password: '12345678'
// });

app.post('/login', (req, res) => {
    const response = validateInput(req.body);

    if (!response.success) {
        res.json({
            msg: 'Invalid Input'
        })
        return;
    }
    else {
        res.send({
            response
        });
    }
})



app.listen(port, () => {
    console.log(`The Server Started At ${port}`);
})

