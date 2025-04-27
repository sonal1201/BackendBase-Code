const express = require('express');
const app = express();

// fileExports
const apiRoute = require('./routes');
const { PORT } = require('./config');

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/api', apiRoute)


app.listen(PORT, () => {
    console.log("Server listening 3000")
})