const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require('./config/database');

connectDB();

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ extended: false }));
app.use(express.static(path.join(__dirname, '../whoami' + '/build')));
// app.use('/', (req, res) => {
//     res.sendFile()
// });

app.use('/api/whatido', require("./routes/api/whatido"));

app.use('/api/whatido', require("./routes/api/contact"));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../' +'/whoami/build/index.html'));
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});

