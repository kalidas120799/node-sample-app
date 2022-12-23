const express = require("express");
const port = 3022;
const app = express();


app.get("/", (req, res) => {
    return res.json({
        data: [],
        created_date: new Date()
    })
})

app.listen(port, () => { console.log(`App running on http://localhost:${port}`); })