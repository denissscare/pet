const express = require('express');
const app = express();
const port = 1337;


app.get('/', (req, res) => {
    res.send("НУ ЧЕ ПАРОСЯТА")
})

app.listen(port, () => {
    console.log("Application on port 1337")
})