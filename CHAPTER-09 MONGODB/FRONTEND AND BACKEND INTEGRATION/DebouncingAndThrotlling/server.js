const express = require('express')

const cors = require('cors');

const app = express();

// Allow requests from all origins
app.use(cors());

const port = 3000;

app.get('/sum', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send({ error: "Invalid input" })
    }

    const result = a + b;

    res.send({ sum: result });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})