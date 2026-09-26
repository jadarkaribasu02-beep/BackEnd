const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.get("/karan", (req, res) => {
    res.send("lol");
})

app.listen(3000)