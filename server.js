// express web server
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello my friends there');
})

port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Web server listening at ${port}`);
})