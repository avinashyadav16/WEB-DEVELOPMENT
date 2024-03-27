const express = require('express')

const cors = require('cors');

const app = express();

app.use(cors());

const port = 3000;

app.get('/interest', (req, res) => {
    const pAmt = parseFloat(req.query.p);
    const rate = parseFloat(req.query.r);
    const time = parseFloat(req.query.t);

    if (isNaN(pAmt) || isNaN(rate) || isNaN(time)) {
        return res.status(400).send({ error: "Invalid input" })
    }

    const interest = (pAmt * rate * time) / 100;

    const totalAmt = pAmt + interest;

    res.send({
        total: totalAmt,
        interest: interest
    })
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})
