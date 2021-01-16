const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.static(path.join(__dirname, 'whoami/public')));

app.get('/test', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../' +'/whoami/public/index.html'))
});

app.get('/second', (req, res, next) => {
    res.send("SECOND WORKING");
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
 });