// express web server
const express = require('express');
const app = express();
const router = require('./routes')


app.use('/', router);

port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Web server listening at ${port}`);
})